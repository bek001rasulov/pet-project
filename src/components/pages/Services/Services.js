import React from 'react';
import HeroSection from "../../HeroSection";
import {homeData} from "../Services/Data";
import Pricing from "../../Pricing";

const Services = () => {
    return (
        <>
            <HeroSection homeData={homeData}/>
            <Pricing/>
        </>
    );
};

export default Services;
