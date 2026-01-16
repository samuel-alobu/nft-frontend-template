"use client";

import React, { useState } from "react";
import DaysComponent from "./DaysComponent/DaysComponent";
import {
  BsCalendar3,
  BsFillAlarmFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";

export default function Collection() {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5, 6];

  const openPopular = () => {
    setPopular(true);
    setFollowing(false);
    setNews(false);
  };

  const openFollower = () => {
    setPopular(false);
    setFollowing(true);
    setNews(false);
  };

  const openNews = () => {
    setPopular(false);
    setFollowing(false);
    setNews(true);
  };

  return (
    <div className="w-full py-12">
      {/* Title + Tabs */}
      <div className="w-140 mx-auto pb-24 text-center min-[320px]:max-[1024px]:w-[90%]">
        <h2 className="text-[3rem] mb-16">Top List Creators</h2>

        <div
          className="
            bg-(--main-bg-color) py-2 px-4 rounded-[4rem]
            flex justify-around gap-4 text-[1.2rem]
            shadow-(--box-shadow)
          "
        >
          <button
            onClick={openPopular}
            className="
              bg-(--icons-color) text-(--main-bg-color)
              p-4 rounded-[4rem] cursor-pointer border border-(--icons-color)
              transition-all duration-300 ease-in
              hover:bg-transparent hover:text-(--icons-color)
              min-[320px]:max-[425px]:text-[0.7rem]
            "
          >
            <span className="inline-flex items-center gap-2">
              <BsFillAlarmFill /> Last 24 hours
            </span>
          </button>

          <button
            onClick={openFollower}
            className="
              bg-(--icons-color) text-(--main-bg-color)
              p-4 rounded-[4rem] cursor-pointer border border-(--icons-color)
              transition-all duration-300 ease-in
              hover:bg-transparent hover:text-(--icons-color)
              min-[320px]:max-[425px]:text-[0.7rem]
            "
          >
            <span className="inline-flex items-center gap-2">
              <BsCalendar3 /> Last 7 days
            </span>
          </button>

          <button
            onClick={openNews}
            className="
              bg-(--icons-color) text-(--main-bg-color)
              p-4 rounded-[4rem] cursor-pointer border border-(--icons-color)
              transition-all duration-300 ease-in
              hover:bg-transparent hover:text-(--icons-color)
              min-[320px]:max-[425px]:text-[0.7rem]
            "
          >
            <span className="inline-flex items-center gap-2">
              <BsFillCalendarDateFill /> Last 30 days
            </span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div
        className="
          w-[80%] mx-auto grid grid-cols-3 gap-8
          min-[320px]:max-[1024px]:w-[90%]
          min-[320px]:max-[425px]:grid-cols-1 min-[320px]:max-[425px]:gap-16
          min-[427px]:max-[1024px]:grid-cols-2 min-[427px]:max-[1024px]:gap-16
        "
      >
        {popular &&
          CardArray.map((_, i) => <DaysComponent key={`popular-${i}`} />)}

        {following &&
          followingArray.map((_, i) => (
            <DaysComponent key={`following-${i}`} />
          ))}

        {news && newsArray.map((_, i) => <DaysComponent key={`news-${i}`} />)}
      </div>
    </div>
  );
}
