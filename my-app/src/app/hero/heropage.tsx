import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import AnimationData from "@/animation/animation1.json";
import Image from "next/image";
import myGif from "@/animation/3otv.gif";

const HeroSection = () => {
  return (
    <section className="md:py-20 py-10 bg-gray-700 space-y-10">
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent"
        >
          Supporting Indonesian tech enthusiasts in building their expertise
          through accessible resources.
        </div>

        <p
          className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-white
            to-gray-400
            bg-clip-text
            text-transparent
            font-bold"
        >
          No matter what your current level is, Buto Ijo will level you up so
          you will (hopefully) become an expert at it and have a career in tech
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <a href="#signin-section">
            {/* <Button
              className="text-white text-lg font-bold px-10 rounded-md text-lg py-4"
              variant="ghost"
            >
              Sign in
            </Button> */}
          </a>
          <a href="#signup-section">
            <Button className="text-lg button font-bold px-10 rounded-md text-lg py-4">
              Join the newsletter
            </Button>
          </a>
        </div>
        <div className="pt-10">
          <Image
            src={myGif}
            alt="my gif"
            height={600}
            width={600}
            className="rounded-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
