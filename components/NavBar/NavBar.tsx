"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
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

  // ✅ Typed correctly (no implicit any)
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
    <div className={Style.navBar}>
      <div className={Style.navBar_container}>
        <div className={Style.navBar_container_left}>
          <div className={Style.logo}>
            <Image src={logo} alt="NFT MARKETPLACE" width={100} height={100} />
          </div>

          <div className={Style.navBar_container_left_box_input}>
            <div className={Style.navBar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFTs" />
              <BsSearch className={Style.search_con} />
            </div>
          </div>
        </div>

        <div className={Style.navBar_container_right}>
          <div className={Style.navBar_container_right_discover}>
            <p onClick={openMenu}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={openMenu}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={openNotification}
            />
            {notification && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={userImage1}
                alt="User Profile"
                width={40}
                height={40}
                onClick={openProfile}
                className={Style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>

      {openSideMenu && <SideBar setOpenSideMenu={setOpenSideMenu} />}
    </div>
  );
}
