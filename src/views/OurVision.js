import OurVisionAgency from "@/components/ourvision/section/OurVisionAgency";
import OurVisionQuote from "@/components/ourvision/section/OurVisionQuote";
import OurVisionStory from "@/components/ourvision/section/OurVisionStory";
import OurVisionTalkAbout from "@/components/ourvision/section/OurVisionTalkAbout";
import OurVisionUs from "@/components/ourvision/section/OurVisionUs";
import React from "react";

const OurVision = () => {
  return (
    <div>
      <OurVisionStory />
      <OurVisionUs />
      <OurVisionQuote />
      <OurVisionAgency />
      <OurVisionTalkAbout />
    </div>
  );
};

export default OurVision;
