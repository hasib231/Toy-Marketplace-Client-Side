import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Gallery from './Gallery';
import OurServices from './OurServices';
import BestToy from './BestToy';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Category></Category>
        <Gallery></Gallery>
        <OurServices></OurServices>
        <BestToy></BestToy>
      </div>
    );
};

export default Home;