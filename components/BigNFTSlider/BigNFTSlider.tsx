"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";

// Internal Import
import Button from "../Button/Button";
import userImage1 from "@/public/img/user-1.png";
import userImage2 from "@/public/img/user-2.png";
import userImage3 from "@/public/img/user-3.png";
import userImage4 from "@/public/img/user-4.png";
import nftImage1 from "@/public/img/nft-image-1.png";
import nftImage2 from "@/public/img/nft-image-2.png";
import nftImage3 from "@/public/img/nft-image-3.png";
import nftImage4 from "@/public/img/nft-image-3.png";

export default function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Samuel Uche",
      collection: "Gym",
      price: "00000064664 ETH",
      like: 243,
      image: userImage1,
      nftImage: nftImage1,
      time: { days: 27, hours: 10, minutes: 11, seconds: 35 },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "00000064664 ETH",
      like: 243,
      image: userImage2,
      nftImage: nftImage2,
      time: { days: 27, hours: 10, minutes: 11, seconds: 35 },
    },
    {
      title: "Gym NFT",
      id: 3,
      name: "Rayaan Hussain",
      collection: "Home",
      price: "00000064664 ETH",
      like: 243,
      image: userImage3,
      nftImage: nftImage3,
      time: { days: 27, hours: 10, minutes: 11, seconds: 35 },
    },
    {
      title: "Home NFT",
      id: 4,
      name: "Shoaib Hussain",
      collection: "Home",
      price: "00000064664 ETH",
      like: 243,
      image: userImage4,
      nftImage: nftImage4,
      time: { days: 27, hours: 10, minutes: 11, seconds: 35 },
    },
  ];

  // Increment
  const inc = useCallback(() => {
    setIdNumber((prev) => (prev + 1 < sliderData.length ? prev + 1 : prev));
  }, [sliderData.length]);

  // Decrement
  const dec = useCallback(() => {
    setIdNumber((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIdNumber((prev) => (prev + 1 < sliderData.length ? prev + 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div>
      <div
        className="
          mx-auto w-[80%] py-32
          grid grid-cols-12 items-center
          max-[65em]:w-[90%] max-[65em]:grid-cols-1 max-[65em]:gap-4
          max-[65em]:pt-112 max-[65em]:px-8 max-[65em]:pb-8
          max-[65em]:z-1111 max-[65em]:h-[90vh]
        "
      >
        {/* LEFT */}
        <div
          className="
            col-start-1 col-end-7 row-start-1 -row-end-1
            bg-(--main-bg-color) shadow-(--box-shadow-2)
            rounded-2xl p-8 z-1111 h-[90vh]
            max-[65em]:h-[120vh] max-[65em]:p-6
          "
        >
          <h2 className="text-[3rem] leading-0">
            {sliderData[idNumber].title}
          </h2>

          {/* Creator + Collection */}
          <div
            className="
              mt-10 grid grid-cols-2 items-center
              max-[65em]:gap-4 max-[65em]:grid-cols-[1.8fr_1fr]
            "
          >
            {/* Creator */}
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />

              <div className="leading-0 max-[65em]:text-[0.8rem] max-[65em]:leading-snug">
                <p className="mt-4 mb-[-0.7rem]">Creator</p>
                <h4 className="flex items-center gap-2">
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            {/* Collection */}
            <div className="flex items-center">
              <AiFillFire className="text-[4rem] max-[65em]:text-[1.5rem]" />

              <div className="leading-0 max-[65em]:text-[0.8rem]">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          {/* Bidding */}
          <div className="mt-10">
            <div className="border-[3px] border-(--shadow-dark-color) m-8 px-16 py-0 rounded-lg">
              <small className="inline-block bg-(--shadow-dark-color) py-4 px-8 rounded-lg font-semibold">
                Current Bid
              </small>

              <p className="mt-4">
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className="flex items-center gap-4">
              <MdTimer className="text-[2rem]" />
              <span>Auction ending in</span>
            </p>

            <div
              className="
                flex items-center gap-12 text-center
                pt-4 pb-12 border-b border-(--shadow-dark-color)
                max-[65em]:gap-8
              "
            >
              {[
                { v: sliderData[idNumber].time.days, l: "days" },
                { v: sliderData[idNumber].time.hours, l: "hours" },
                { v: sliderData[idNumber].time.minutes, l: "mins" },
                { v: sliderData[idNumber].time.seconds, l: "secs" },
              ].map((t) => (
                <div key={t.l}>
                  <p className="text-[2rem] font-black leading-0 max-[65em]:text-[1rem]">
                    {t.v}
                  </p>
                  <span>{t.l}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-16 pt-8">
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-8 text-[2rem] mt-12">
            <TbArrowBigLeftLines
              className="
                cursor-pointer transition-all duration-300
                hover:bg-(--shadow-dark-color) hover:rounded-full hover:p-4
              "
              onClick={dec}
            />
            <TbArrowBigRightLines
              className="
                cursor-pointer transition-all duration-300
                hover:bg-(--shadow-dark-color) hover:rounded-full hover:p-4
              "
              onClick={inc}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            col-start-6 col-end-13 row-start-1 -row-end-1
            p-4 bg-(--main-bg-color) rounded-[2.5rem]
            shadow-(--main-bg-color)
            max-[65em]:-mt-280
          "
        >
          <div className="relative">
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT Image"
              className="rounded-4xl"
            />

            <div
              className="
                absolute top-12 right-12
                flex items-center gap-4 text-[1.2rem]
                bg-(--icons-color) text-(--shadow-dark-color)
                py-2 px-4 rounded-full
              "
            >
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
