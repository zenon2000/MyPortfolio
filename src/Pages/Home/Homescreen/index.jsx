import React from 'react';
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonials from "../Testimonials";

export default function Home(){
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Contact />
            <Footer />
        </>
    );
}