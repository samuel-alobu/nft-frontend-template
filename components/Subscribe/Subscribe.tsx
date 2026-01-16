import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

// Internal Import
import update from "@/public/img/update.png";

export default function Subscribe() {
  return (
    <div className="w-full">
      <div
        className="
          w-[80%] mx-auto
          grid grid-cols-[1.5fr_2fr] items-center
          min-[320px]:max-[768px]:w-[90%]
          min-[320px]:max-[768px]:grid-cols-1 min-[320px]:max-[768px]:gap-16
          min-[768px]:max-[1024px]:w-[90%]
          min-[768px]:max-[1024px]:grid-cols-2 min-[768px]:max-[1024px]:gap-16
        "
      >
        {/* LEFT */}
        <div>
          <h2
            className="
              text-[3rem] leading-0
              min-[320px]:max-[768px]:text-[2rem]
              min-[768px]:max-[1024px]:text-[2rem]
            "
          >
            Never miss a drop
          </h2>

          <p className="text-[1.2rem]">
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops
          </p>

          <div className="flex items-center gap-4 mt-8">
            <span className="bg-(--icons-color) text-(--main-bg-color) py-2 px-4 rounded-4xl w-16 text-center">
              01
            </span>
            <small className="text-[1rem] font-bold">Get more discount</small>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <span className="bg-(--icons-color) text-(--main-bg-color) py-2 px-4 rounded-4xl w-16 text-center">
              02
            </span>
            <small className="text-[1rem] font-bold">
              Get premium magazines
            </small>
          </div>

          <div
            className="
              mt-12 p-8 w-[80%] rounded-[4rem]
              bg-(--icons-color) text-(--main-bg-color)
              flex items-center
              min-[320px]:max-[768px]:w-full min-[320px]:max-[768px]:p-4
              min-[768px]:max-[1024px]:w-full min-[768px]:max-[1024px]:p-4
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                bg-transparent border-0 outline-none w-[90%]
                placeholder:text-(--main-bg-color)
                placeholder:text-[1.2rem]
              "
            />
            <RiSendPlaneFill className="text-[2rem]" />
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <Image src={update} alt="get update" height={600} width={800} />
        </div>
      </div>
    </div>
  );
}
