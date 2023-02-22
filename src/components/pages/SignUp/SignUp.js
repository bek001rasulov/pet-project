import React from 'react';
import HeroSection from "../../HeroSection";
import {homeData} from "../SignUp/Data";
import Pricing from "../../Pricing";

const SignUp = () => {
    return (
        <>
            <HeroSection homeData={homeData}/>
            <Pricing/>
        </>
    );
};

export default SignUp;
