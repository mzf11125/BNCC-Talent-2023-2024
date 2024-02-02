"use client";

import React from "react";
import Image from "next/image";
import myGif from "@/animation/Be.gif";

const features = [
  {
    name: "Discord",
    description:
      "Where we constantly update our members about new stuff coming out in the Indonesian tech world.",
    image: "",
    alt: "Discord",
    link: "https://discord.gg/q2reXaUTrM",
    color: "blue",
  },
  {
    name: "Newsletter",
    description: "Join our newsletter by filling the form below.",
    image: "",
    alt: "email",
    link: "/#signup-section",
  },
  {
    name: "LinkedIn",
    description: "Follow our LinkedIn at Buto Ijo tech news",
    image: "",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammadzidanfatonie/",
  },
  {
    name: "Instagram",
    description: "Follow our Instagram @butoijotechnews.",
    image: "",
    alt: "Instagram",
    link: "https://instagram.com/mzf11125",
  },
  {
    name: "Facebook",
    description:
      "Join our Facebook now by searching Buto Ijo Telegram on google.",
    image: "",
    alt: "Facebook",
    link: "https://facebook.com",
  },
  {
    name: "Telegram",
    image: "",
    description:
      "Join our telegram now by searching Buto Ijo Telegram on google",
    alt: "Telegram",
    link: "https://telegram.com",
  },
];

const AboutUsSection = () => {
  return (
    <div className="">
      <div
        className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
bg-gray-700 
        
        "
      >
        <div className="p-5 justify-center md:w-1/3">
          <div
            className="
                bg-gradient-to-r
                from-blue-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10"
          >
            From tech enthusiasts to tech professionals.
          </div>
          <div className="text-2xl mb-8 text-white">
            We help build and foster Indonesia's young tech talents in a
            community we called Buto Ijo
          </div>
          <button className="bg-green-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-green-600">
            <a href="/#signup-section">Join now</a>
          </button>
        </div>
        {/* 
        <video className="rounded-xl md:w-2/5 p-4 md:p-0 " autoPlay muted loop>
          <source src="/content/video-2.mp4" type="video/mp4" />
        </video> */}
        <div className="rounded-xl md:w-2/5 p-4 md:p-0">
          <Image
            src={myGif}
            alt="my gif"
            height={600}
            width={600}
            className="rounded-xl mx-auto"
          />
        </div>
      </div>

      <div className="flex-col items-center justify-center bg-gray-700">
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
          Our Community
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40 bg-gray-700 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
            >
              <div
                className="
                            text-white text-3xl font-bold
                            "
              >
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={300}
                    height={300}
                    className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                  />
                </a>
                <div>
                  <div
                    className="text-2xl pb-4 bg-gradient-to-t
                                    from-white
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent

                                    
                                    
                                    "
                  >
                    {feature.name}
                  </div>

                  <div className="test-white text-lg">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
