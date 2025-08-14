import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

export interface ImageUpload {
  file: File;
  bucketName: string;
}

export interface ImageDelete {
  filePath: string;
  bucketName: string;
}

export const uploadImageToSupabase = async ({
  file,
  bucketName,
}: ImageUpload) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true,
    });

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucketName).getPublicUrl(fileName);

  return { publicUrl, fileName };
};

export const deleteImageFromSupabase = async ({
  filePath,
  bucketName,
}: ImageDelete) => {
  const fileName = filePath.split('/').pop() || filePath;

  const { error: deleteError } = await supabase.storage
    .from(bucketName)
    .remove([fileName]);

  if (deleteError) throw deleteError;

  return;
};
