import OurVisionSectionAgency from "@/components/OurVisionSection/OurVisionSectionAgency";
import OurVisionSectionQuote from "@/components/OurVisionSection/OurVisionSectionQuote";
import OurVisionSectionStory from "@/components/OurVisionSection/OurVisionSectionStory";
import OurVisionSectionTalkAbout from "@/components/OurVisionSection/OurVisionSectionTalkAbout";
import OurVisionSectionUs from "@/components/OurVisionSection/OurVisionSectionUs";
import React from "react";

const OurVision = () => {
  return (
    <div>
      <OurVisionSectionStory />
      <OurVisionSectionUs />
      <OurVisionSectionQuote />
      <OurVisionSectionAgency />
      <OurVisionSectionTalkAbout />
    </div>
  );
};

export default OurVision;
