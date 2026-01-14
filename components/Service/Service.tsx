import React from "react";
import Image from "next/image";

// Internal Import
import serviceImage1 from "@/public/img/service-1.png";
import serviceImage2 from "@/public/img/service-2.png";
import serviceImage3 from "@/public/img/service-3.png";
import serviceImage4 from "@/public/img/service-4.png";

export default function Service() {
  return (
    <div className="w-[80%] mx-auto my-32 max-[35em]:w-[90%]">
      <div className="grid grid-cols-4 gap-12 text-center max-[50em]:w-[90%] max-[50em]:grid-cols-2 max-[50em]:gap-4">
        {/* ITEM 1 */}
        <div>
          <Image
            src={serviceImage1}
            alt="filter & discover"
            width={100}
            height={100}
          />

          <p className="mt-12 mb-8">
            <span className="px-6 py-2 rounded-full bg-(--icons-color) text-(--shadow-dark-color)">
              Step 1
            </span>
          </p>

          <h3>Filter & Discover</h3>

          <p>
            Browse curated NFT collections with powerful filters that help you
            quickly find digital assets that match your taste, goals, and
            budget—all in one seamless experience.
          </p>
        </div>

        {/* ITEM 2 */}
        <div>
          <Image
            src={serviceImage2}
            alt="filter & discover"
            width={100}
            height={100}
          />

          <p className="mt-12 mb-8">
            <span className="px-6 py-2 rounded-full bg-(--icons-color) text-(--shadow-dark-color)">
              Step 2
            </span>
          </p>

          <h3>Connect Wallet</h3>

          <p>
            Securely link your crypto wallet in seconds to manage your NFTs,
            track transactions, and access the full marketplace without
            compromising your privacy or assets.
          </p>
        </div>

        {/* ITEM 3 */}
        <div>
          <Image
            src={serviceImage3}
            alt="start trading"
            width={100}
            height={100}
          />

          <p className="mt-12 mb-8">
            <span className="px-6 py-2 rounded-full bg-(--icons-color) text-(--shadow-dark-color)">
              Step 3
            </span>
          </p>

          <h3>Start Trading</h3>

          <p>
            Buy, sell, and list NFTs effortlessly using real-time market
            insights, transparent pricing, and smooth transactions designed for
            both beginners and experienced traders.
          </p>
        </div>

        {/* ITEM 4 */}
        <div>
          <Image
            src={serviceImage4}
            alt="earn money"
            width={100}
            height={100}
          />

          <p className="mt-12 mb-8">
            <span className="px-6 py-2 rounded-full bg-(--icons-color) text-(--shadow-dark-color)">
              Step 4
            </span>
          </p>

          <h3>Earn Money</h3>

          <p>
            Turn your digital creativity and smart trading decisions into income
            by selling NFTs, growing your portfolio, and unlocking new earning
            opportunities in the NFT ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}
