import React from "react";
import Image from "next/image";

// Internal Import
import { Button } from "@/components/componentindex";
import hero from "@/public/img/hero (1).png";

export default function HeroSection() {
  return (
    <div className="w-[80%] mx-auto my-12 max-[35em]:w-[90%]">
      <div className="grid grid-cols-2 gap-8 max-[55em]:grid-cols-1 max-[55em]:gap-16">
        <div className="pr-24 max-[55em]:pr-8">
          <h1 className="text-[5rem] leading-none max-[55em]:text-[3rem] max-[55em]:leading-none">
            Discover, collect, sell NFTs 🖼️
          </h1>

          <p className="mb-8">
            Discover the most outstanding NFTs in all topics of life. Create
            your NFTs and sell them
          </p>

          <Button btnName="Start your search" />
        </div>

        <div>
          <Image src={hero} alt="Hero section" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
