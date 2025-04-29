
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface UploadOgImageProps {
  onSuccess?: () => void;
}

const UploadOgImage = ({ onSuccess }: UploadOgImageProps) => {
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
      
      // onSuccess 콜백이 있으면 호출
      if (onSuccess) {
        onSuccess();
      }
      
      // 브라우저 캐시 갱신을 위해 URL에 타임스탬프 추가
      const timestamp = Date.now();
      const { data } = supabase.storage
        .from('wingbeats')
        .getPublicUrl(`main-image.${fileExt}?t=${timestamp}`);
      
      // 메타태그 업데이트
      updateOgMetaTags(data?.publicUrl);
      
    } catch (error) {
      toast.error('오류가 발생했습니다.');
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };
  
  // 메타태그 업데이트 함수
  const updateOgMetaTags = (imageUrl?: string) => {
    if (!imageUrl) return;
    
    // OG 이미지 메타태그 업데이트
    const ogImageTags = document.querySelectorAll('meta[property="og:image"], meta[property="og:image:secure_url"], meta[name="twitter:image"]');
    ogImageTags.forEach(tag => {
      tag.setAttribute('content', imageUrl);
    });
    
    console.log('OG 메타태그가 업데이트되었습니다:', imageUrl);
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
