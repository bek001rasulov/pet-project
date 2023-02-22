import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css'


const HeroSection = ({homeData}) => {
    return (
        <>
            {homeData.map((home) => {
                return (
                    <div className={home.lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                        <div className="container">
                            <div className="row home__hero-row"
                                 style={{
                                     display: "flex",
                                     flexDirection: home.imgStart === 'start' ? 'row-reverse' : 'row'
                                 }}>
                                <div className="col">
                                    <div className="home__hero-text-wrapper">
                                        <div className="top-line">
                                            {home.topLine}
                                        </div>
                                        <h1 className={home.lightText ? 'heading' : 'heading dark'}>
                                            {home.headline}
                                        </h1>
                                        <p className={home.lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                            {home.description}
                                        </p>
                                        <Link to="/sign-up">
                                            <Button buttonSize='btn--wide' buttonColor='orange'>
                                                {home.buttonLabel}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="home__hero-img-wrapper">
                                        <img src={home.img} alt={home.alt} className='home__hero-img'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    );
};

export default HeroSection;
