import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselData = [
  { title: "GarudaHacks", link: "https://garudahacks.com" },
  { title: "HackFest", link: "https://gdsc-hackfest.com" },
  { title: "More coming soon", link: "#" },
];

export function CarouselSection() {
  return (
    <div>
      <div
        className="
                text-3xl
                flex
                justify-center
                md:text-5xl
                font-bold
                pt-5
                pb-10
                bg-gradient-to-r
                from-purple-400
                to-blue-800
                bg-clip-text
                text-transparent
                
                "
      >
        Hackathons
      </div>
      <div className="mx-auto items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {carouselData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-gray-800">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <a
                        href={item.link}
                        className="text-4xl font-semibold bg-gradient-to-r from-purple-900 to-green-900 outline-none"
                        style={{ color: "white" }} // BEGIN: Change arrow color to white
                      >
                        {item.title}
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
