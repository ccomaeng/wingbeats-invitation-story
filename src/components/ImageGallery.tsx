
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  {
    src: "/lovable-uploads/31c36a54-0a29-4fd5-a39a-b8485f58d4db.png",
    alt: "Bird landing on grass",
  },
  {
    src: "/lovable-uploads/c1f1d7bb-13b6-440e-8e93-2c64608483fb.png",
    alt: "Kingfisher in flight",
  },
  {
    src: "/lovable-uploads/85220d91-f300-4f3f-8abd-d2fe455e4b5c.png",
    alt: "Woodpecker near tree",
  },
  {
    src: "/lovable-uploads/0ac992f6-be49-4262-9c0e-1b4950e85342.png",
    alt: "Owl landing on branch",
  },
];

const ImageGallery = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="relative w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
                <p className="absolute bottom-2 right-2 text-[10px] text-white/60 font-light">
                  photo by car1004
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default ImageGallery;
