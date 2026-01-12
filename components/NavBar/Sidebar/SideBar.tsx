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

import Style from "./SideBar.module.css";
import Button from "../../Button/Button";
import logo from "@/public/img/logo-light.svg";

type SideBarProps = {
  setOpenSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

type ButtonProps = {
  btnName: string;
  handleClick?: () => void;
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
    <div className={Style.sidebar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={closeSideBar} />

      <div className={Style.sideBar_top}>
        <Image src={logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topics of NFT &amp; your
          own stories and share them
        </p>

        <div className={Style.sideBar_social}>
          <a href="#" aria-label="Facebook">
            <TiSocialFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <TiSocialTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <TiSocialYoutube />
          </a>
          <a href="#" aria-label="Instagram">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sidebar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={openDiscoverMenu}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
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

        <div>
          <div className={Style.sideBar_menu_box} onClick={openHelpMenu}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className={Style.sideBar_help}>
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

        <div className={Style.sideBar_button}>
          <Button btnName="Create" />
          <Button btnName="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}
