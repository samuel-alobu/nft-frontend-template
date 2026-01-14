import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import logo from "@/public/img/logo-light.svg";
import { Discover, HelpCenter } from "../NavBar";

export default function Footer() {
  return (
    <div className="w-full py-6 relative">
      <div
        className="
          w-[80%] mx-auto
          grid
          grid-cols-[1.3fr_1fr_1fr_2fr]
          items-start justify-between
          gap-12
          max-[45em]:w-[90%]
          max-[45em]:grid-cols-[1fr_2fr]
          max-[35em]:w-[90%]
          max-[35em]:grid-cols-1
        "
      >
        {/* Social / Brand */}
        <div className="flex flex-col gap-4">
          <Image src={logo} alt="footer logo" height={100} width={100} />
          <p>
            The world's leading and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, discover
            exclusive digital Items.
          </p>

          {/* footer_social */}
          <div className="flex gap-[1.3rem] text-[1.5rem] items-center">
            <a
              href="#"
              className="p-[0.2rem] rounded-full transition-all duration-300 ease-in grid hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:shadow-(--box-shadow)"
              aria-label="Facebook"
            >
              <TiSocialFacebook />
            </a>

            <a
              href="#"
              className="p-[0.2rem] rounded-full transition-all duration-300 ease-in grid hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:shadow-(--box-shadow)"
              aria-label="LinkedIn"
            >
              <TiSocialLinkedin />
            </a>

            <a
              href="#"
              className="p-[0.2rem] rounded-full transition-all duration-300 ease-in grid hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:shadow-(--box-shadow)"
              aria-label="Twitter"
            >
              <TiSocialTwitter />
            </a>

            <a
              href="#"
              className="p-[0.2rem] rounded-full transition-all duration-300 ease-in grid hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:shadow-(--box-shadow)"
              aria-label="YouTube"
            >
              <TiSocialYoutube />
            </a>

            <a
              href="#"
              className="p-[0.2rem] rounded-full transition-all duration-300 ease-in grid hover:bg-(--icons-color) hover:text-(--shadow-dark-color) hover:shadow-(--box-shadow)"
              aria-label="Instagram"
            >
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        {/* Discover */}
        <div>
          <h3 className="font-medium uppercase">Discover</h3>
          <Discover />
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-medium uppercase">Help Center</h3>
          <HelpCenter />
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-medium uppercase">Subscribe</h3>

          {/* subscribe_box */}
          <div className="w-full flex justify-between items-center p-[1.5rem_2rem] bg-(--icons-color) text-(--shadow-dark-color) rounded-[5rem] mt-12">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent border-0 outline-none w-[90%] text-(--shadow-dark-color) placeholder:text-(--shadow-dark-color)"
            />
            <RiSendPlaneFill className="cursor-pointer text-[2rem]" />
          </div>

          {/* subscribe_box_info */}
          <div className="p-[1rem_2rem]">
            <p>
              Discover, collect, and sell extraordinary NFTs. OpenSea is the
              first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
