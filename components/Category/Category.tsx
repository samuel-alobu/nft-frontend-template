import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

// Internal Import
import creatorBackground1 from "@/public/img/creatorbackground-1.jpeg";

export default function Category() {
  const CategoryArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-[80%] mx-auto min-[320px]:max-[425px]:w-[90%]">
      <div
        className="
          py-16 grid grid-cols-6 gap-8
          min-[320px]:max-[425px]:grid-cols-1
          min-[427px]:max-[770px]:grid-cols-2
          min-[772px]:max-[1025px]:grid-cols-3
        "
      >
        {CategoryArray.map((el, i) => (
          <div
            key={i}
            className="
              leading-0 transition-all duration-300 ease-in
              rounded-2xl overflow-hidden cursor-pointer pb-4
              hover:shadow-(--box-shadow)
            "
          >
            <Image
              src={creatorBackground1}
              alt="background image"
              width={350}
              height={150}
              className="rounded-2xl object-cover"
            />

            <div className="flex items-center p-4 gap-4">
              <span className="text-[3rem] mt-4">
                <BsCircleFill />
              </span>

              <div>
                <h4>Entertainment</h4>
                <small>1995 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
