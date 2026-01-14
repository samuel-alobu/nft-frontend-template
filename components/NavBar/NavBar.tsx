"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import { Discover, HelpCenter, Notification, Profile } from "./index";
import { Button } from "../componentindex";

import logo from "@/public/img/logo-light.svg";
import userImage1 from "@/public/img/user-1.png";

import SideBar from "./Sidebar/SideBar";

export default function NavBar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const btnText = e.currentTarget.innerText;

    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    setNotification((prev) => !prev);
    setProfile(false);
    setHelp(false);
    setDiscover(false);
  };

  const openProfile = () => {
    setProfile((prev) => !prev);
    setHelp(false);
    setDiscover(false);
    setNotification(false);
  };

  const openSideBar = () => setOpenSideMenu((prev) => !prev);

  return (
    <div className="w-full py-6 relative z-111111111">
      <div className="w-[80%] mx-auto grid grid-cols-2 items-center justify-between gap-4">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="NFT MARKETPLACE" width={100} height={100} />
          </div>

          {/* Search (hidden on mobile) */}
          <div>
            <div className="w-[60%] hidden md:flex items-center p-2 rounded-4xl border border-(--icons-color)">
              <input
                type="text"
                placeholder="Search NFTs"
                className="w-[90%] border-0 outline-none bg-transparent"
              />
              <BsSearch
                onClick={() => {}}
                className="cursor-pointer text-[1.4rem]"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-3 md:grid-cols-[1fr_1fr_0.5fr_1fr_0.3fr] gap-4 items-center">
          {/* Discover Menu (hidden on mobile) */}
          <div className="relative cursor-pointer hidden md:block">
            <p onClick={openMenu}>Discover</p>

            {discover && (
              <div className="absolute p-[1rem_0.5rem] shadow-(--box-shadow) text-base w-60 rounded-2xl bg-(--main-bg)">
                <Discover />
              </div>
            )}
          </div>

          {/* Help Center Menu (hidden on mobile) */}
          <div className="relative cursor-pointer hidden md:block">
            <p onClick={openMenu}>Help Center</p>

            {help && (
              <div className="absolute p-[1rem_0.5rem] shadow-(--box-shadow) text-base w-60 rounded-2xl bg-(--main-bg)">
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className="relative cursor-pointer">
            <MdNotifications
              className="text-[2rem]"
              onClick={openNotification}
            />
            {notification && <Notification />}
          </div>

          {/* Create Button (hidden on mobile) */}
          <div className="relative cursor-pointer hidden md:block">
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* User Profile */}
          <div className="relative cursor-pointer">
            <div>
              <Image
                src={userImage1}
                alt="User Profile"
                width={40}
                height={40}
                onClick={openProfile}
                className="rounded-full"
              />
              {profile && <Profile />}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <CgMenuRight
              className="text-[2.5rem] cursor-pointer"
              onClick={openSideBar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar (mobile only) */}
      {openSideMenu && (
        <div className="fixed top-0 w-[24rem] bg-(--main-bg-color) shadow-(--box-shadow) h-screen overflow-y-auto z-11111 block md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
}
