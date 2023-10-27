import React from "react";
import HomeBanner from "@/components/home/section/HomeBanner";
import HomeOurServices from "@/components/home/section/HomeOurServices";
import HomeOurVision from "@/components/home/section/HomeOurVision";
import HomeStrongPoint from "@/components/home/section/HomeStrongPoint";
import HomeTrust from "@/components/home/section/HomeTrust";
import HomeOurNews from "@/components/home/section/HomeOurNews";
import HomeYourIdeas from "@/components/home/section/HomeYourIdea";
import HomeFaq from "@/components/home/section/HomeFaq";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeOurServices />
      <HomeStrongPoint />
      <HomeTrust />
      <HomeOurVision />
      <HomeOurNews />
      <HomeFaq />
      {/* <HomeYourIdeas /> */}
    </div>
  );
};

export default Home;
