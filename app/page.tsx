import React from 'react'

//Internal Import
import Style from "@/app/index.module.css"
import { HeroSection, Service, BigNFTSlider } from '@/components/componentindex'

export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  )
}
