import React from 'react';
import HeroSection from "../../HeroSection";
import {homeData} from "./Data";
import Pricing from "../../Pricing";

const Home = () => {
    return (
        <>
            <HeroSection homeData={homeData}/>
            <Pricing/>
        </>
    );
};

export default Home;
