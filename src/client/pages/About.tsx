import * as React from "react"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../scss/about";

const About: React.FC<IAboutProps> = () => {

    const [loaded, setLoaded] = useState(false);
    const w = localStorage.getItem("w");
    const handleLoad = () => {
        setLoaded(true);
    };
    useEffect(() => {
        setTimeout(async () => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 2000);
    }, [loaded]);

    if(!w) {
        return (
            <>
            </>
        )
    } else {
    return (
        <>
        <div id="width-custom" className="absolute background1"></div>
        <div className=" background2">
        <main className="container mt-5">
            <div className="row">
                <img className="profile-circle" src="./assets/professional.jpg" alt=""/>

            </div>
        </main>
        </div>
        </>
    )
}}

interface IAboutProps {};

export default About;