import React from "react";
import Link from "next/link";

export default function Discover() {
  const discover = [
    { name: "Collection", link: "/collection" },
    { name: "Search", link: "/search" },
    { name: "Author Profile", link: "/author-profile" },
    { name: "NFT Details", link: "/nft-details" },
    { name: "Account Setting", link: "/account-setting" },
    { name: "Connect Wallet", link: "/connect-wallet" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div>
      {discover.map((el, i) => (
        <div
          key={i}
          className="
            px-4 py-2
            transition-all duration-300 ease-in
            z-222222222
            hover:bg-(--icons-color)
            hover:text-(--shadow-dark-color)
            hover:rounded-[0.3rem]
          "
        >
          <Link href={el.link}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
}
