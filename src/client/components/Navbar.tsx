import * as React from "react";
import "../scss/navbar";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";

const NavBar: React.FC<INavBar> = () => {
    const location = useLocation();
    useLocation();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [tag, setTag] = useState("on");
    const [tag2, setTag2] = useState("");
    const [displayNone, setDisplayNone] = useState("");
    const [displayNone2, setDisplayNone2] = useState("displayNone");
    const [logo, setLogo] = useState("");
    const [c, setC] = useState("custom-container3-alt");
    const [wSet, setWSet] = useState("")
    localStorage.setItem("w", wSet);

    const handleLoad = () => {
        setLoaded(true);
        localStorage.setItem("w", wSet);
    };

    const handleLoad2 = () => {
        setWSet("w")
    }

    let handleNav = () => {

    }

    let handleContact = () => {
        if (location.pathname == "/") {
        } else {
            history.push("/");
            setTimeout(() => {
                document.getElementById("contact").scrollIntoView()
            }, 80)
        }
    }

    let changeTag = () => {
        if (tag == "on") {
            setC("custom-container3")
            setTag2("on");
            setTag("off");
            setDisplayNone("displayNone");
            setDisplayNone2("");
        } else if (tag == "off") {
            setC("custom-container3-alt")
            setTag2("off");
            setTag("on");
            setDisplayNone("");
            setDisplayNone2("displayNone");
        }
    }

    useEffect(() => {
        setLogo("logo");
        setTimeout(() => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 2000);
    }, [loaded]);
    
    useEffect(() => {
        setTimeout(() => {
            handleLoad2(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 1999);
    });


    if (loaded) {
        return (
            <>
                <div className="custom-container-logo">
                    <div className={`${logo} absolute pointer`} onClick={changeTag}>mr;</div>
                </div>
                <div className="y absolute"><img src="/assets/clickformore.png" className="absolute x" style={{height: "0px", width: "0px"}} alt="" /></div>
                <div className="absolute col-12 custom-flex justify-content-end text-muted custom-reminder"> <span className="under-1000">*This site was made with</span> <span className="space-mid-sentence"></span>  React, SCSS, Express, and Node.</div>
                <div className={`custom-flex ${c} justify-content-center small-nav-style`}>
                    <div className={`${tag2} custom-flex flex-wrap justify-content-center align-items-center small-nav-style`}>
                        <div className="col-12 space"></div>
                        <div className="col-12 space mb-1"></div>
                        <NavLink exact className={` ${displayNone2} text-center col new-styles mt-1`} activeStyle={{fontWeight: "bolder"}} to={"/"}>Home</NavLink>
                        <NavLink exact  className={` ${displayNone2} text-center col new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/work"}>Work</NavLink>
                        <NavLink exact  className={` ${displayNone2} text-center col new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/about"}>About</NavLink>
                        <Link to="contact" spy={false} smooth={true} className={` ${displayNone2} text-center col new-styles pointer`} onClick={handleContact}>Contact</Link>
                    </div>
                </div>
                <div id="custom-margin" className="mobileon custom-flex justify-content-around align-items-center c custom-container-logo">
                    <div className="ml-2 mobileon custom-flex justify-content-around">
                        <NavLink exact  className={` mobileon new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/"}>Home</NavLink>
                        <div className="filler mobileon"></div>
                        <NavLink exact  className={` mobileon new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/work"}>Work</NavLink>
                    </div>
                    <div className="filler mobileon"></div>
                    <div className="mr-2 mobileon custom-flex justify-content-around ">
                        <div className="filler mobileon"></div>
                        <div className="filler mobileon"></div>
                        <div className="filler mobileon"></div>
                        <NavLink exact  className={` mobileon new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/about"}>About</NavLink>
                        <div className="filler mobileon"></div>
                        <Link to="contact" spy={false} smooth={true} className={` mobileon new-styles pointer`} onClick={handleContact}>Contact</Link>

                    </div>
                </div>
                <div className="custom-flex custom-container justify-content-center mobileoff">
                    <div className={` ${tag} mobileoff navbar1 text-center text-quicksand-big custom-flex justify-content-around align-items-center`}>
                        <div className="filler"></div>
                        <div className="filler2"></div>
                        <NavLink exact  className={` ${displayNone} new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/"}>Home</NavLink>
                        <NavLink exact  className={` ${displayNone} new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/work"}>Work</NavLink>
                        <NavLink exact  className={` ${displayNone} new-styles`} activeStyle={{fontWeight: "bolder"}} to={"/about"}>About</NavLink>
                        <Link to="contact" spy={false} smooth={true} className={` ${displayNone} new-styles pointer`} onClick={handleContact}>Contact</Link>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="custom-container-logo">
                    <div className={`${logo} absolute pointer`} >mr;</div>
                </div>
            </>
        )
    }
}

interface INavBar { };

export default NavBar;