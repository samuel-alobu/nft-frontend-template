"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiArrowSortedDown,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

import Button from "../../Button/Button";
import logo from "@/public/img/logo-light.svg";

type SideBarProps = {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({ setOpenSideMenu }: SideBarProps) {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const closeSideBar = () => setOpenSideMenu(false);

  const openDiscoverMenu = () => {
    setOpenDiscover((prev) => !prev);
    setOpenHelp(false);
  };

  const openHelpMenu = () => {
    setOpenHelp((prev) => !prev);
    setOpenDiscover(false);
  };

  const discover = [
    { name: "Collection", link: "/collection" },
    { name: "Search", link: "/search" },
    { name: "Author Profile", link: "/author-profile" },
    { name: "NFT Details", link: "/nft-details" },
    { name: "Account Setting", link: "/account-setting" },
    { name: "Connect Wallet", link: "/connect-wallet" },
    { name: "Blog", link: "/blog" },
  ];

  const helpCenter = [
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Sign In", link: "/sign-in" },
    { name: "Subscription", link: "/subscription" },
  ];

  return (
    <div className="relative p-8 border-b border-(--icons-color) bg-(--main-bg-color)">
      {/* Close button */}
      <button
        type="button"
        aria-label="Close sidebar"
        onClick={closeSideBar}
        className="
          absolute top-12 right-8
          grid place-items-center
          cursor-pointer
          bg-transparent border-0
          p-[0.6rem] rounded-lg
          shadow-(--box-shadow)
          transition-transform duration-200 ease-in-out
          hover:rotate-45
        "
      >
        <GrClose />
      </button>

      {/* Top section */}
      <div>
        <Image src={logo} alt="logo" width={150} height={150} priority />

        <p className="-mt-8">
          Discover the most outstanding articles on all topics of NFT &amp; your
          own stories and share them
        </p>

        {/* Socials */}
        <div className="flex gap-[1.3rem] text-[1.5rem] items-center">
          {[
            { label: "Facebook", Icon: TiSocialFacebook },
            { label: "Twitter", Icon: TiSocialTwitter },
            { label: "YouTube", Icon: TiSocialYoutube },
            { label: "Instagram", Icon: TiSocialInstagram },
          ].map(({ label, Icon }) => (
            <a
              key={label}
              className="
                a__link
                p-[0.2rem] rounded-full
                transition-all duration-300 ease-in
                grid
                hover:bg-(--icons-color)
                hover:text-(--shadow-dark-color)
              "
              href="#"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Menu section */}
      <div className="p-8 uppercase font-medium border-b border-(--icons-color)">
        {/* Discover */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer py-[0.8rem]"
            onClick={openDiscoverMenu}
          >
            <p>Discover</p>
            <TiArrowSortedDown
              className={`transition-transform duration-200 ease-in-out ${
                openDiscover ? "rotate-180" : ""
              }`}
            />
          </div>

          {openDiscover && (
            <div className="px-4">
              {discover.map((el) => (
                <p key={el.link}>
                  <Link href={el.link} onClick={closeSideBar}>
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Help Center */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer py-[0.8rem]"
            onClick={openHelpMenu}
          >
            <p>Help Center</p>
            <TiArrowSortedDown
              className={`transition-transform duration-200 ease-in-out ${
                openHelp ? "rotate-180" : ""
              }`}
            />
          </div>

          {openHelp && (
            <div className="px-4">
              {helpCenter.map((el) => (
                <p key={el.link}>
                  <Link href={el.link} onClick={closeSideBar}>
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="py-8 flex items-center justify-between gap-4">
          <Button btnName="Create" handleClick={() => {}} />
          <Button btnName="Connect Wallet" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
