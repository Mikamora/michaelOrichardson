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

    if (!w) {
        return (
            <>
                <div id="width-custom" className="absolute background1"></div>
            </>
        )
    } else {
        return (
            <>
                <div id="width-custom" style={{height: "50% !important"}} className="absolute background1"></div>
                <div className="about-background">
                    <main className="container mt-5">
                        <div className="row col-12 custom-flex-about justify-content-center flex-wrap">
                            <div className="profile-width d-flex justify-content-center"><img className="profile-circle" src="./assets/professional.jpg" key={"pic1"} alt="" /></div>
                            <div className="col-md-8 my-5 custom-about-text">I'm Michael Richardson, a full-stack web developer looking for full-time employment. I'm open to any and every opportunity that comes my way so don't hesitate to let me know if you are interested in my work! My love for computer science started in highschool when I took my first Java class, CS100, which taught me the very basics of the digital world. Then in college I studied computer science for a year, however my time there was cut chort due to financial issues that arose. Eventually, I was lucky enough to hear about an organization called, Innovate Birmingham, which is a 14 week bootcamp that teaches React, JS, Node, Express and more. I recently graduated with my Web Development certification and I couldn't be happier. I love working with people and figuring out solutions to problems. I believe there is not a problem that cannot be solved and I'm very determined and driven to find the answer. Thank you for visiting my webpage and if you like my work, please, let me know!<hr className="edit-line" />
                                <div className="d-flex justify-content-around">
                                    <span className="socials"><img className="facebook" src="./assets/fb.png" alt="" /></span>
                                    <img src="./assets/github.png" className="socials" alt="" />
                                    <img className="socials" src="./assets/linkedin.png" alt="" />
                                </div>
                                <div className="filler"></div>
                                <div className="text-center">mor7991@yahoo.com</div>
                            </div>
                        </div>
                        <div className="row col-12 filler">
                        </div>
                        <div className="row col-12">

                        </div>
                    </main>
                </div>
            </>
        )
    }
}

interface IAboutProps { };

export default About;