import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, Loader2 } from "lucide-react";

interface ImageUploadDialogProps {
  trigger: React.ReactNode;
}

const ImageUploadDialog = ({ trigger }: ImageUploadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<{ id: string; file_path: string; alt_text: string | null }[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const fetchImages = async () => {
    setLoadingImages(true);
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setImages(data);
    }
    setLoadingImages(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen) fetchImages();
  };

  const getPublicUrl = (filePath: string) => {
    const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    for (const file of Array.from(files)) {
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
    }

    toast({ title: "Upload complete!" });
    setUploading(false);
    fetchImages();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = async (id: string, filePath: string) => {
    await supabase.storage.from("gallery").remove([filePath]);
    await supabase.from("gallery_images").delete().eq("id", id);
    setImages((prev) => prev.filter((img) => img.id !== id));
    toast({ title: "Image deleted" });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage Gallery Images</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
              disabled={uploading}
              className="flex-1"
            />
            {uploading && <Loader2 className="w-5 h-5 animate-spin text-primary" />}
          </div>

          {loadingImages ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : images.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No images uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img) => (
                <div key={img.id} className="relative group rounded-lg overflow-hidden border border-border">
                  <img
                    src={getPublicUrl(img.file_path)}
                    alt={img.alt_text || "Gallery image"}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={() => handleDelete(img.id, img.file_path)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-muted-foreground p-1 truncate">{img.alt_text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadDialog;
