import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, Loader2, ImagePlus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ImageUploadDialogProps {
  trigger: React.ReactNode;
}

const ImageUploadDialog = ({ trigger }: ImageUploadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setProgress(0);
    let uploaded = 0;

    for (const file of selectedFiles) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(fileName, file);

      if (uploadError) {
        toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
        continue;
      }

      await supabase.from("gallery_images").insert({
        file_path: fileName,
        alt_text: file.name.replace(/\.[^/.]+$/, ""),
        title: file.name.replace(/\.[^/.]+$/, ""),
      });

      uploaded++;
      setProgress(Math.round((uploaded / selectedFiles.length) * 100));
    }

    toast({ title: `${uploaded} image${uploaded !== 1 ? "s" : ""} uploaded successfully!` });
    setUploading(false);
    setSelectedFiles([]);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setOpen(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!uploading) {
      setOpen(isOpen);
      if (!isOpen) {
        setSelectedFiles([]);
        setProgress(0);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImagePlus className="w-5 h-5 text-primary" />
            Upload Gallery Images
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {/* Drop zone / file selector */}
          <label
            htmlFor="gallery-file-input"
            className="flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-accent/50 transition-colors"
          >
            <Upload className="w-10 h-10 text-muted-foreground" />
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                {selectedFiles.length > 0
                  ? `${selectedFiles.length} file${selectedFiles.length !== 1 ? "s" : ""} selected`
                  : "Click to select images"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WEBP supported</p>
            </div>
            <input
              id="gallery-file-input"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              disabled={uploading}
              className="hidden"
            />
          </label>

          {/* Progress bar */}
          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">{progress}% complete</p>
            </div>
          )}

          {/* Upload button */}
          <Button
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || uploading}
            className="w-full"
            size="lg"
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Upload {selectedFiles.length > 0 ? `${selectedFiles.length} Image${selectedFiles.length !== 1 ? "s" : ""}` : "Images"}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadDialog;
