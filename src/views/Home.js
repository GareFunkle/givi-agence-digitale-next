import React from 'react';
import HomeSectionBanner from '@/components/HomeSection/HomeSectionBanner';
import HomeSectionOurServices from '@/components/HomeSection/HomeSectionOurServices';
import HomeSectionOurVision from '@/components/HomeSection/HomeSectionOurVision';
import HomeSectionStrongPoint from '@/components/HomeSection/HomeSectionStrongPoint';
import HomeSectionTrust from '@/components/HomeSection/HomeSectionTrust';
import HomeSectionOurNews from '@/components/HomeSection/HomeSectionOurNews';
import HomeSectionYourIdeas from '@/components/HomeSection/HomeSectionYourIdea';
import HomeSectionFaq from '@/components/HomeSection/HomeSectionFaq';
import HomeSectionPortofolio from '@/components/HomeSection/HomeSectionPortofolio';
import WhiteSpace from '@/components/ui/whiteSpace/WhiteSpace';

const Home = () => {
  return (
    <div>
      <HomeSectionBanner />
      <HomeSectionOurServices />
      <HomeSectionStrongPoint />
      <WhiteSpace />
      <HomeSectionPortofolio />
      <HomeSectionTrust />
      <HomeSectionOurVision />
      <HomeSectionOurNews />
      <HomeSectionFaq />
      <HomeSectionYourIdeas />
    </div>
  );
};

export default Home;
