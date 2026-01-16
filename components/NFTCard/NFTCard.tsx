"use client";

import React, { useState } from "react";
import Image from "next/image";
import nftImage1 from "@/public/img/nft-image-1.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

export default function NFTCard() {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [like, setLike] = useState(true);

  const likeNft = () => setLike((p) => !p);

  return (
    <div
      className="
        w-[80%] grid mx-auto grid-cols-3 gap-12 mb-40
        min-[320px]:max-[425px]:grid-cols-1
        min-[427px]:max-[768px]:w-[90%] min-[427px]:max-[768px]:grid-cols-2
        min-[770px]:max-[1024px]:grid-cols-2
      "
    >
      {featureArray.map((el, i) => (
        <div
          key={i + 1}
          className="
            group bg-(--shadow-light-color) p-4 rounded-2xl
            grid grid-cols-4 grid-rows-4 cursor-pointer
            transition-all duration-300 ease-in
            hover:shadow-(--box-shadow-2)
          "
        >
          {/* Image */}
          <div className="col-start-1 -col-end-1 row-start-1 row-end-[end] overflow-hidden rounded-2xl">
            <Image
              src={nftImage1}
              alt="nft images"
              width={600}
              height={600}
              className="
                rounded-2xl transition-all duration-400 ease-in
                group-hover:scale-[1.05]
              "
            />
          </div>

          {/* Top overlay */}
          <div
            className="
              col-start-1 -col-end-1 row-start-1 -row-end-2
              flex items-start justify-between leading-0 overflow-hidden
            "
          >
            <div className="bg-(--icons-color) py-2 px-4 text-(--main-bg-color) rounded-4xl m-4">
              <div
                onClick={likeNft}
                className="flex items-center text-[1.2rem] gap-2"
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart className="text-red-500" />
                )}{" "}
                22
              </div>
            </div>

            <div
              className="
                bg-(--shadow-light-color) py-2 px-20 text-center
                skew-x-45 rounded-bl-2xl -mr-8
                min-[320px]:max-[768px]:px-8
              "
            >
              <div className="skew-x-[-45deg] bg-(--shadow-light-color)">
                <small>Remaining time</small>
                <p className="text-[1.2rem] font-extrabold min-[320px]:max-[768px]:text-[1rem]">
                  3h : 15m : 20s
                </p>
              </div>
            </div>
          </div>

          {/* Bottom details */}
          <div
            className="
              col-start-1 -col-end-1 row-start-3 -row-end-1
              leading-0 z-111 items-end
              grid grid-cols-[1.5fr_1fr] overflow-hidden
            "
          >
            <div
              className="
                bg-(--shadow-light-color) -ml-12 pb-2
                skew-x-45 rounded-tr-2xl
              "
            >
              <div className="skew-x-[-45deg] pl-12">
                <h4 className="text-[1.3rem]">Clone #17373</h4>

                <div className="flex justify-between items-end">
                  <div className="bg-(--icons-color) text-(--main-bg-color) rounded-[0.2rem] p-[0.2rem]">
                    <small>Current Bid</small>
                    <p className="pt-2 font-semibold">1.000ETH</p>
                  </div>

                  <div>
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-(--icons-color) text-end m-6 text-[1.5rem]">
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
