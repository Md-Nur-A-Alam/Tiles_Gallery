import React from 'react';
import Banner from './component/Banner/Banner';
import MovingText from './component/MovingText/MovingText';
import FeatureTiles from './component/FeatureTiles/FeatureTiles';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <MovingText></MovingText>
      <FeatureTiles></FeatureTiles>
    </div>
  );
};

export default HomePage;