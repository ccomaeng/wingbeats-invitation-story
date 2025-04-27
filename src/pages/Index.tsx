import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Phone, Mail, Copy } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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

            <Separator className="my-6" />

            <blockquote className="font-handwriting text-base text-center space-y-6 my-8 relative">
              <span className="absolute left-0 top-0 text-6xl text-gold opacity-50 -ml-4 -mt-2">"</span>
              <p className="relative z-10 px-8">
                새 한 마리가 하늘을 가르면, 그 뒤엔 수천 년 이어온 생명의 이야기가 따라옵니다. 저는 그 이야기의 첫 번째 청중이자 기록자가 되고 싶습니다.
              </p>
              <span className="absolute right-0 bottom-0 text-6xl text-gold opacity-50 -mr-4 -mb-2">"</span>
            </blockquote>
          </div>

          {/* Exhibition information */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-[#2B5329] mb-6 text-center flex items-center justify-center gap-2">
              전시 정보 🖼️
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-right">
                <h3 className="font-semibold mb-1">전시 기간</h3>
                <p>2025년 10월 13일(월) - 10월 19일(일)</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">관람 시간</h3>
                <p>7일간, 10:00 - 17:00</p>
              </div>

              <div className="text-right">
                <h3 className="font-semibold mb-1">전시 장소</h3>
                <p>홍천미술관 제2관</p>
                <div className="flex items-center justify-end gap-2">
                  <p className="text-gray-600 text-xs">강원특별자치도 홍천군 홍천읍 연봉리 162-3</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => {
                      navigator.clipboard.writeText("강원특별자치도 홍천군 홍천읍 연봉리 162-3");
                      toast.success("주소가 복사되었습니다");
                    }}
                  >
                    <Copy className="w-3 h-3" />
                    <span className="text-xs ml-1">복사</span>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1">관람료</h3>
                <p>무료 💸</p>
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
