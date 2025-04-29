
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UploadOgImage = () => {
  const [uploading, setUploading] = useState(false);
  
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        toast.error('이미지를 선택해주세요.');
        return;
      }
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `main-image.${fileExt}`;
      const filePath = `${fileName}`;
      
      // Supabase Storage에 파일 업로드
      const { error } = await supabase.storage
        .from('wingbeats')
        .upload(filePath, file, { upsert: true });
        
      if (error) {
        toast.error('이미지 업로드에 실패했습니다.');
        console.error('Error uploading image:', error);
        return;
      }
      
      toast.success('OG 이미지가 성공적으로 업로드되었습니다.');
    } catch (error) {
      toast.error('오류가 발생했습니다.');
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="og-image" className="cursor-pointer">
          <Button variant="outline" disabled={uploading}>
            {uploading ? '업로드 중...' : 'OG 이미지 업로드'}
          </Button>
          <input
            type="file"
            id="og-image"
            accept="image/*"
            onChange={uploadImage}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default UploadOgImage;
