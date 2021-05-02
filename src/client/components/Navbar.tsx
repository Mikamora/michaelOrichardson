import * as React from "react";
import "../scss/navbar";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar: React.FC<INavBar> = () => {
    useLocation();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [tag, setTag] = useState("on");
    const [tag2, setTag2] = useState("");
    const [displayNone, setDisplayNone] = useState("");
    const [displayNone2, setDisplayNone2] = useState("displayNone");
    const [logo, setLogo] = useState("");
    const [c, setC] = useState("custom-container3-alt");

    window.onbeforeunload = function (e: any) {
        localStorage.removeItem("w");
    };

    const handleLoad = () => {
        setLoaded(true);
        localStorage.setItem("w", "w");
    };

    let handleNav = () => {

    }

    let handleContact = () => {
        history.push("/contact");
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


    if (loaded) {
        return (
            <>
                <div className="custom-container-logo">
                    <div className={`${logo} absolute pointer`} onClick={changeTag}>mr;</div>
                </div>
                <div className={`custom-flex ${c} justify-content-center small-nav-style`}>
                    <div className={`${tag2} custom-flex flex-wrap justify-content-center align-items-center small-nav-style`}>
                        <div className="col-12 space"></div>
                        <div className="col-12 space"></div>
                        <NavLink className={` ${displayNone2} text-center col new-styles top`} to={"/"}>Home</NavLink>
                        <NavLink className={` ${displayNone2} text-center col new-styles top`} to={"/work"}>Work</NavLink>
                        <NavLink className={` ${displayNone2} text-center col new-styles top`} to={"/about"}>About</NavLink>
                        <span className={` ${displayNone2} text-center col new-styles pointer top`} onClick={handleContact}>Contact</span>
                    </div>
                </div>
                <div id="custom-margin" className="mobileon custom-flex justify-content-around align-items-center c custom-container-logo">
                    <div className="ml-2 mobileon custom-flex justify-content-around">
                        <NavLink className={` mobileon new-styles`} to={"/"}>Home</NavLink>
                        <div className="filler mobileon"></div>
                        <NavLink className={` mobileon new-styles`} to={"/work"}>Work</NavLink>
                    </div>
                    <div className="filler mobileon"></div>
                    <div className="mr-2 mobileon custom-flex justify-content-around ">
                        <div className="filler mobileon"></div>
                        <div className="filler mobileon"></div>
                        <div className="filler mobileon"></div>
                        <NavLink className={` mobileon new-styles`} to={"/about"}>About</NavLink>
                        <div className="filler mobileon"></div>
                        <span className={` mobileon new-styles pointer`} onClick={handleContact}>Contact</span>

                    </div>
                </div>
                <div className="custom-flex custom-container justify-content-center mobileoff">
                    <div className={` ${tag} mobileoff navbar1 text-center text-quicksand-big custom-flex justify-content-around align-items-center`}>
                        <div className="filler"></div>
                        <div className="filler2"></div>
                        <NavLink className={` ${displayNone} new-styles`} to={"/"}>Home</NavLink>
                        <NavLink className={` ${displayNone} new-styles`} to={"/work"}>Work</NavLink>
                        <NavLink className={` ${displayNone} new-styles`} to={"/about"}>About</NavLink>
                        <span className={` ${displayNone} new-styles pointer`} onClick={handleContact}>Contact</span>
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