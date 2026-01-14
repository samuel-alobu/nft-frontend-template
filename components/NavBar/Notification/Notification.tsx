import React from "react";
import Image from "next/image";
import userImage1 from "@/public/img/user-1.png";

export default function Notification() {
  return (
    <div
      className="
        absolute
        p-[2rem_1rem]
        shadow-(--box-shadow)
        text-base
        w-100
        rounded-2xl
        -left-80
        top-14
        z-2222222222
        bg-[var(--main-bg-color)
        max-[35em]:w-[20rem]
        max-[35em]:-left-60
      "
    >
      <p className="text-[1.3rem] font-semibold mb-8">Notification</p>

      <div
        className="
          flex items-start gap-4
          p-4
          transition-all duration-300 ease-in
          hover:bg-(--icons-color)
          hover:text-(--shadow-dark-color)
          hover:rounded-[0.3rem]
          max-[35em]:p-[0.3rem]
        "
      >
        <Image
          src={userImage1}
          alt="profile image"
          width={50}
          height={50}
          className="rounded-[5rem]"
        />

        <div className="leading-0 mt-[-0.8rem]">
          <h4 className="font-semibold">Shoaib Akhter</h4>

          <p className="text-[15px] leading-[0.3] relative max-[35em]:text-[12px]">
            Measure action of your user...
          </p>

          <small>3 minutes ago</small>
        </div>

        <span className="w-2 h-2 rounded-full bg-[aqua]" />
      </div>
    </div>
  );
}
