import * as React from "react"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../scss/about";

const About: React.FC<IAboutProps> = () => {

    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [loadedContent, setLoadedContent] = useState(false);
    const [ctrl, setCtrl] = useState(false);
    const [shift, setShift] = useState(false);
    const w = localStorage.getItem("w");
    const checkDark = window.localStorage.getItem("dark");
    const handleLoad = () => {
        setLoaded(true);
    };
    const handleLoad2 = () => {
        setLoadedContent(true);
    }
    useEffect(() => {
        setTimeout(async () => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 1000);
    }, [loaded]);
    useEffect(() => {
        setTimeout(async () => {
            handleLoad2(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 2000);
    });

    window.addEventListener("keydown", (e: any) => {
        if (e.key == "Control") {
            setCtrl(true);
        } else if (e.key == "Shift") {
            setShift(true);
        } else if (e.key == "L" && ctrl == true && shift == true) {
            darkmode();
        }
    })

    let handleContact = () => {
        if (location.pathname == "/") {
        } else {
            history.push("/");
            setTimeout(() => {
                document.getElementById("contact").scrollIntoView()
            }, 100)
        }
    }

    let darkmode = () => {
        if (!checkDark) {
            window.localStorage.setItem("mode", "index2.scss");
            window.localStorage.setItem("dark", "hi");
        } else {
            window.localStorage.removeItem("dark");
            window.localStorage.removeItem("mode");
        }
        window.location.reload(true);
    }


    if (w == "") {
        return (
            <>
                <div id="width-custom" className="absolute"></div>
                <div id="width-custom2" className="absolute"></div>
            </>
        )
    } else if (!loaded) {
        return (
            <>
                <div id="width-custom" className="absolute"></div>
                <div id="width-custom2" className="absolute"></div>
                <div className="loader2">Loading...</div>
            </>
        )
    }
    else if (!checkDark) {
        return (
            <>
                <div className="text-muted absolute custom-dark-info mobile-not-on"> * A little bright? Ctrl + Shift + L</div>
                <div id="width-custom" className="absolute background1"></div>
                <div className="about-background">
                    <main className="container mt-5">
                        <div className="row fix col-12 custom-flex-about justify-content-center flex-wrap">
                            <div className="profile-width d-flex justify-content-center custom-mobile-margin"><img className="profile-circle" src="./assets/professional.jpg" key={"pic1"} alt="" /></div>
                            <div className="col-md-8 my-4 custom-about-text">I'm Michael Richardson, a full-stack web developer looking for full-time employment. I'm open to any and every opportunity that comes my way so don't hesitate to let me know if you are interested in my work! My love for computer science started in highschool when I took my first Java class, CS100, which taught me the very basics of the digital world. Then in college I studied computer science for a year, however my time there was cut short due to financial issues that arose. Eventually, I was lucky enough to hear about an organization called, Innovate Birmingham, which is a 14 week bootcamp that teaches React, JS, Node, Express and more. I recently graduated with my Web Development certification and I couldn't be happier. I love working with people and figuring out solutions to problems. I believe there is not a problem that cannot be solved and I'm very determined and driven to find the answer. Thank you for visiting my webpage and if you like my work, please, let me know!<hr className="edit-line" />
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.facebook.com/michael.richardson.98892615" target="_blank"><span className="socials"><img className="facebook" src="./assets/fb.png" alt="" /></span></a>
                                    <a href="https://github.com/Mikamora" target="_blank"><img src="./assets/github.png" className="socials" alt="" /></a>
                                    <a href="https://www.linkedin.com/in/michael-richardson-0ab290187/" target="_blank"><img className="socials" src="./assets/linkedin.png" alt="" /></a>
                                </div>
                                <div className="filler-small"></div>
                                <div className="text-center custom-about-text-2 pointer" onClick={handleContact}>mor7991@yahoo.com</div>
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
    } else {
        return (
            <>
                <div className="white-text absolute custom-dark-info"> * A little dark? Ctrl + Shift + L</div>
                <div id="width-custom" className="absolute background1"></div>
                <div className="about-background">
                    <main className="container mt-5">
                        <div className="row col-12 custom-flex-about justify-content-center flex-wrap">
                            <div className="profile-width d-flex justify-content-center"><img className="profile-circle" src="./assets/professional.jpg" key={"pic1"} alt="" /></div>
                            <div className="col-md-8 my-5 custom-about-text">I'm Michael Richardson, a full-stack web developer looking for full-time employment. I'm open to any and every opportunity that comes my way so don't hesitate to let me know if you are interested in my work! My love for computer science started in highschool when I took my first Java class, CS100, which taught me the very basics of the digital world. Then in college I studied computer science for a year, however my time there was cut chort due to financial issues that arose. Eventually, I was lucky enough to hear about an organization called, Innovate Birmingham, which is a 14 week bootcamp that teaches React, JS, Node, Express and more. I recently graduated with my Web Development certification and I couldn't be happier. I love working with people and figuring out solutions to problems. I believe there is not a problem that cannot be solved and I'm very determined and driven to find the answer. Thank you for visiting my webpage and if you like my work, please, let me know!<hr className="edit-line" />
                                <div className="d-flex justify-content-around">
                                    <a href="https://www.facebook.com/michael.richardson.98892615" target="_blank"><span className="socials"><img className="facebook" src="./assets/fb.png" alt="" /></span></a>
                                    <a href="https://github.com/Mikamora" target="_blank"><img src="./assets/github.png" className="socials" alt="" /></a>
                                    <a href="https://www.linkedin.com/in/michael-richardson-0ab290187/" target="_blank"><img className="socials" src="./assets/linkedin.png" alt="" /></a>
                                </div>
                                <div className="filler-small"></div>
                                <div className="text-center custom-about-text-2">mor7991@yahoo.com</div>
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