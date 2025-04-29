
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import UploadOgImage from '@/components/UploadOgImage';

const Index = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  
  // 이미지 URL을 가져오는 함수
  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const { data } = await supabase
          .storage
          .from('wingbeats')
          .getPublicUrl('main-image.jpg');
        
        if (data) {
          setImageUrl(data.publicUrl);
          console.log('이미지 URL 불러오기 성공:', data.publicUrl);
        }
      } catch (error) {
        console.error('이미지 URL 불러오기 실패:', error);
      }
    };
    
    fetchImageUrl();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center font-noto-serif">날개짓의 서사</h1>
      <div className="flex flex-col items-center">
        {imageUrl ? (
          <div className="mb-6">
            <img 
              src={imageUrl} 
              alt="메인 이미지" 
              className="max-w-full h-auto rounded-lg shadow-lg" 
              style={{ maxHeight: '500px' }}
            />
          </div>
        ) : (
          <p>이미지 로딩 중...</p>
        )}
        
        <div className="mt-8">
          <UploadOgImage onSuccess={() => {
            // 이미지 업로드 후 URL 다시 가져오기
            const { data } = supabase
              .storage
              .from('wingbeats')
              .getPublicUrl('main-image.jpg');
            
            if (data) {
              setImageUrl(data.publicUrl);
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default Index;
