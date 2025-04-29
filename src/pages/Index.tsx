
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
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">전시회 정보</h2>
            <p className="mb-2"><strong>전시명:</strong> 날개짓의 서사 - 엄춘식 개인사진전</p>
            <p className="mb-2"><strong>작가:</strong> 엄춘식 (조류사진작가)</p>
            <p className="mb-2"><strong>일시:</strong> 2025년 5월 15일 - 5월 30일</p>
            <p className="mb-2"><strong>장소:</strong> 서울시 종로구 인사동 예술의 전당</p>
            <p className="mb-6"><strong>관람시간:</strong> 오전 10시 - 오후 6시 (월요일 휴관)</p>
            
            <h3 className="text-xl font-bold mb-3">전시 소개</h3>
            <p className="mb-4">
              '날개짓의 서사'는 조류사진작가 엄춘식의 10년간의 작업을 모은 개인사진전입니다. 
              한국의 산과 들, 강과 바다를 오가며 담아낸 다양한 새들의 모습을 통해 자연과 
              생명의 아름다움을 전달하고자 합니다.
            </p>
            <p className="mb-6">
              본 전시회는 멸종 위기에 처한 조류들의 현실을 알리고, 자연 보전의 중요성에 대한 
              메시지도 함께 담고 있습니다.
            </p>
          </div>
        </div>
        
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
