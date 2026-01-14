import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegImage, FaUserAlt, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload } from "react-icons/tb";

import userImage1 from "@/public/img/user-1.png";

export default function Profile() {
  const menuItemClass =
    "flex items-center gap-8 px-6 py-0 transition-all duration-300 ease-in hover:bg-[var(--icons-color)] hover:text-[var(--shadow-dark-color)] hover:rounded-[0.3rem]";

  return (
    <div
      className="
        absolute
        p-[2rem_0.5rem]
        shadow-(--box-shadow)
        text-base
        w-[20rem]
        rounded-2xl
        -left-68
        top-18
        z-2222222222
        bg-(--main-bg-color)
      "
    >
      {/* profile_account */}
      <div className="flex items-start gap-8 p-6">
        <Image
          src={userImage1}
          alt="user profile"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <p className="font-semibold">Shoaib Bhai</p>
          <small>X08326457246490527...</small>
        </div>
      </div>

      {/* profile_menu */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className={menuItemClass}>
            <FaUserAlt />
            <Link href="/myprofile">My Profile</Link>
          </div>

          <div className={menuItemClass}>
            <FaRegImage />
            <Link href="/my-items">My Items</Link>
          </div>

          <div className={menuItemClass}>
            <FaUserEdit />
            <Link href="/edit-profile">Edit Profile</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className={menuItemClass}>
            <MdHelpCenter />
            <Link href="/help">Help</Link>
          </div>

          <div className={menuItemClass}>
            <TbDownload />
            <Link href="/disconnect">Disconnect</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
