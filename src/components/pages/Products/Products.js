import React from 'react';
import HeroSection from "../../HeroSection";
import {homeData} from "../Products/Data";

const Products = () => {
    return (
        <>
            <HeroSection homeData={homeData}/>
        </>
    );
};

export default Products;
