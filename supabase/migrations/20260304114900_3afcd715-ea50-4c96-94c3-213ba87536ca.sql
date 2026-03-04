
-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  alt_text TEXT,
  file_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view gallery images
CREATE POLICY "Gallery images are viewable by everyone"
  ON public.gallery_images FOR SELECT USING (true);

-- Only allow inserts/deletes without auth for now (secret link approach)
CREATE POLICY "Anyone can insert gallery images"
  ON public.gallery_images FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can delete gallery images"
  ON public.gallery_images FOR DELETE USING (true);

-- Create storage bucket for gallery
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Storage policies
CREATE POLICY "Gallery images are publicly accessible"
  ON storage.objects FOR SELECT USING (bucket_id = 'gallery');

CREATE POLICY "Anyone can upload gallery images"
  ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Anyone can delete gallery images"
  ON storage.objects FOR DELETE USING (bucket_id = 'gallery');
