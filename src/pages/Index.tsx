
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import ImageGallery from '@/components/ImageGallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-beige">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-navy"
        >
          {/* Header section */}
          <div className="text-center mb-12">
            <p className="font-serif text-lg mb-2">엄춘식 개인사진전</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-10">날개짓의 서사(敍事)</h1>
            <div className="mb-12">
              <ImageGallery />
            </div>
          </div>

          {/* Artist introduction */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-8">
            <h2 className="font-serif text-2xl text-center mb-8">"하늘을 가르는 찰나를 영원으로 바꾸는 셔터"</h2>
            <div className="space-y-6 text-base leading-relaxed mb-8">
              <p>
                1953년 강원도 홍천에서 태어난 엄춘식은 새들의 비행에 깃든 서사를 1/1000 초의 순간 속에 포착하는 조류 전문 사진작가입니다. 산·들·갯벌·초원을 가리지 않고 현장을 누비며 셔터를 누르는 그는 "순간의 울림이 곧 영원의 기록"이라는 신념으로 자연과 인간이 이어지는 깊은 이야기를 써 내려가고 있습니다.
              </p>
              <p>
                그의 수십 년에 걸친 열정과 헌신이 빚어낸 작품들을 한자리에서 만나보실 수 있는 특별한 순간이 다가옵니다. 2025년 10월, 엄춘식 사진작가는 여러분을 그의 사진전에 초대합니다. 새들의 숨결과 날갯짓이 전하는 생명의 감동을 함께 나누는 시간이 되시길 바랍니다.
              </p>
            </div>

            {/* Career information */}
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl mb-3">주요 경력</h3>
                <ul className="list-disc list-inside space-y-1.5 text-sm">
                  <li>한국사진작가협회 회원 (2015 – 현재)</li>
                  <li>조류사진분과 30대 운영위원</li>
                  <li>강원도지회 진행간사</li>
                </ul>
              </div>

              {/* Recent activities and awards combined */}
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">최근 3년 활동</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>2022 제36회 강원사진대전 — 오색 딱따구리</li>
                    <li>2022 제26회 강원사진전 — 두루미</li>
                    <li>2023 생애최애사진전 — 청호반새 삼걸상</li>
                    <li>2023 제27회 강원사진전 — 최부엉이의 외출</li>
                    <li>2024 제28회 강원사진전 — 육추일기 우수작품상</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">대표 수상</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>춘천국제레저대회 촬영대회 가작 (2014)</li>
                    <li>강원사진대전 삼걸상·특선 다수 (2015 – 2024)</li>
                    <li>서울 국제평화미술제 최우수상 (2019)</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <blockquote className="font-handwriting text-xl text-center space-y-4 my-8">
              <p>"새 한 마리가 하늘을 가르면, 그 뒤엔 수천 년 이어온 생명의 이야기가 따라옵니다."</p>
              <p>"저는 그 이야기의 첫 번째 청중이자 기록자가 되고 싶습니다."</p>
            </blockquote>
          </div>

          {/* Exhibition information */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-[#2B5329] mb-4">전시 정보</h2>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-1">전시 기간</h3>
                <p>2025년 10월 13일(월) - 10월 19일(일)</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">관람 시간</h3>
                <p>7일간, 10:00 - 17:00</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">전시 장소</h3>
                <p>홍천미술관 제2관</p>
                <p className="text-gray-600 text-xs">강원특별자치도 홍천군 홍천읍 연봉리 162-3</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">관람료</h3>
                <p>무료</p>
              </div>
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold" />
                <p>010-9058-7008</p>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold" />
                <p>car7009@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Invitation message */}
          <div className="text-center italic text-lg space-y-2 mt-12">
            <p>자연과 예술이 만나는 시간,</p>
            <p>작가와 함께 새들의 이야기를 나누는 자리에</p>
            <p>여러분을 진심으로 초대합니다.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
