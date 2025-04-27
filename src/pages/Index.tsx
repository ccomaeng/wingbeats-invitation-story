
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-beige">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-navy"
        >
          {/* 헤더 섹션 */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl mb-6">날개짓의 서사</h1>
            <p className="font-serif text-xl md:text-2xl mb-4">敍事</p>
            <p className="text-lg md:text-xl">엄춘식 조류사진작가 개인전</p>
          </div>

          {/* 전시 정보 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CalendarDays className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-serif text-lg">전시 기간</p>
                  <p>2025년 5월 15일 - 5월 30일</p>
                  <p className="text-sm text-gray-600">오전 10:00 - 오후 6:00 (월요일 휴관)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gold" />
                <div>
                  <p className="font-serif text-lg">전시 장소</p>
                  <p>서울 예술의전당 한가람미술관 제3전시실</p>
                  <p className="text-sm text-gray-600">서울특별시 서초구 남부순환로 2406</p>
                </div>
              </div>
            </div>
          </div>

          {/* 작가 소개 */}
          <div className="prose max-w-none">
            <p className="text-lg md:text-xl mb-8 leading-relaxed font-serif">
              "자연의 순간을 포착하여 영원한 이야기로 만드는 것,<br/>
              그것이 제가 추구하는 사진의 본질입니다."
            </p>
            
            <div className="text-base md:text-lg space-y-4">
              <p>
                한국의 들과 산을 누비며 20년간 야생조류의 생태를 기록해온 엄춘식 작가의 첫 개인전입니다.
                자연과 생명의 경이로움을 담은 120여 점의 작품을 선보입니다.
              </p>
              <p className="text-sm text-gray-600">
                * 전시 개막식: 5월 15일 오후 4시<br/>
                * 작가와의 대화: 5월 17일 오후 3시
              </p>
            </div>
          </div>

          {/* 푸터 */}
          <footer className="mt-16 text-center text-sm text-gray-600">
            <p>문의: 02-XXX-XXXX | exhibition@example.com</p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
