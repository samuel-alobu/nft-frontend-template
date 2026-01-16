"use client";

import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdVerified } from "react-icons/md";

export default function Filter() {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => setFilter((p) => !p);
  const openImage = () => setImage((p) => !p);
  const openVideo = () => setVideo((p) => !p);
  const openMusic = () => setMusic((p) => !p);

  return (
    <div className="py-16 w-full">
      {/* Top bar */}
      <div
        className="
          w-[80%] mx-auto flex items-center justify-between pb-16
          min-[320px]:max-[786px]:w-[90%]
          min-[320px]:max-[786px]:grid min-[320px]:max-[786px]:gap-16
        "
      >
        {/* Left buttons */}
        <div
          className="
            flex gap-8
            min-[320px]:max-[786px]:grid min-[320px]:max-[786px]:grid-cols-3
          "
        >
          {["NFTs", "Arts", "Music", "Sports", "Photography"].map((t) => (
            <button
              key={t}
              onClick={() => {}}
              className="
                border outline-none cursor-pointer transition-all duration-300 ease-in
                py-4 px-6 rounded-4xl text-[1.3rem]
                border-(--main-bg-color) bg-(--main-bg-color)
                hover:border-(--icons-color) hover:text-(--icons-color)
                hover:shadow-(--box-shadow)
                min-[320px]:max-[375px]:p-[0.2rem]
                min-[377px]:max-[786px]:p-4
              "
            >
              {t}
            </button>
          ))}
        </div>

        {/* Right filter toggle (was .filter_box_right_box in CSS) */}
        <div className="flex justify-end">
          <div
            onClick={openFilter}
            className="
              border border-(--icons-color) text-(--icons-color)
              shadow-(--box-shadow) cursor-pointer
              py-4 px-8 rounded-4xl
              flex items-center gap-4
              min-[320px]:max-[786px]:justify-center
              min-[320px]:max-[786px]:gap-16
              min-[320px]:max-[786px]:px-8
            "
          >
            <FaFilter />
            <span>Filter</span>
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>

      {/* Filter pills */}
      {filter && (
        <div
          className="
            w-[80%] mx-auto flex py-8 border-t border-(--icons-color)
            min-[320px]:max-[786px]:w-[90%]
            min-[320px]:max-[786px]:grid min-[320px]:max-[786px]:grid-cols-2
          "
        >
          {/* Active bid pill */}
          <div className="p-4">
            <div
              className="
                bg-(--icons-color) text-(--main-bg-color)
                py-2 px-4 rounded-4xl cursor-pointer
                flex items-center gap-2
                min-[320px]:max-[786px]:justify-between
              "
            >
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          {/* Images pill */}
          <div className="p-4">
            <div
              onClick={openImage}
              className="
                border border-(--icons-color) text-(--icons-color)
                py-2 px-4 rounded-4xl cursor-pointer
                flex items-center gap-2
                min-[320px]:max-[786px]:justify-between
              "
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* Videos pill */}
          <div className="p-4">
            <div
              onClick={openVideo}
              className="
                border border-(--icons-color) text-(--icons-color)
                py-2 px-4 rounded-4xl cursor-pointer
                flex items-center gap-2
                min-[320px]:max-[786px]:justify-between
              "
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* Music pill */}
          <div className="p-4">
            <div
              onClick={openMusic}
              className="
                border border-(--icons-color) text-(--icons-color)
                py-2 px-4 rounded-4xl cursor-pointer
                flex items-center gap-2
                min-[320px]:max-[786px]:justify-between
              "
            >
              <FaMusic /> <small>Music</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>

          {/* Verified pill */}
          <div className="p-4">
            <div
              className="
                bg-(--icons-color) text-(--main-bg-color)
                py-2 px-4 rounded-4xl cursor-pointer
                flex items-center gap-2
                min-[320px]:max-[786px]:justify-between
              "
            >
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
