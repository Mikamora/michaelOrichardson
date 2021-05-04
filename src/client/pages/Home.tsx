import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "../scss/home";



const Home: React.FC<IHomeProps> = () => {


    const [loaded, setLoaded] = useState(false);
    const [projects, setProjects] = useState(null);
    const [learnMore, setLearnMore] = useState("learn-more-off");
    const [learnMoreObject, setLearnMoreObject] = useState("no-display");
    const [blur, setBlur] = useState("blur-off");
    const [titleShow, setTitleShow] = useState("title-off");
    const [border, setBorder] = useState("");
    const history = useHistory();
    const w = localStorage.getItem("w");
    const handleLoad = () => {
        setLoaded(true);
    };
    useEffect(() => {
        setTimeout(async () => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 2000);
    }, [loaded]);

    useEffect(() => {
        (
            async () => {
                const res = await fetch("/projects");
                const projects = await res.json();
                setProjects(projects);
            }
        )()
    }, [])

    let handleOnProjects = () => {
        setBlur("blur-on")
        setTitleShow("title-on")
        setBorder("border-transparent")
    }

    let handleOffProjects = () => {
        setBlur("blur-off")
        setTitleShow("title-off")
        setBorder("")
    }

    let handleLearnMore = () => {
        if (learnMore == "learn-more-off") {
            setLearnMore("learn-more-on")
            setLearnMoreObject("display-on")
        } else if (learnMore == "learn-more-on") {
            setLearnMore("learn-more-off")
            setLearnMoreObject("no-display")
        }
    }

    // let scrolldown1 = () => {
    //     window.scrollTo({top: 1028, left: 0, behavior: "smooth"})
    // }

    if (!loaded && !w) {
        return (
            <>
                <div className="background1 size15 absolute"></div>
            </>
        )
    } else {
        return (
            <>
                {/* first part/ welcome */}
                <div className="background1">
                    <div className="">
                        <div className="fullscreen d-flex justify-content-center flex-wrap">
                            <div className="col-12 text-center bolder big-quicksand big-margin-top custom-header-text">Hi, nice to meet you!</div>
                            <div className="col-12 filler"></div>
                            <div className="col-5 med-quicksand text-align-right under-1300">I’m <span className="bolder">Michael Richardson</span>, thanks for stopping by! Please take a look around!</div>
                            <div className="vertical-line under-1300"></div>
                            <div className="col-5 less-med-quicksand text-align-left custom-flex-home align-items-center under-1300">A web and software developer with a specialization in JavaScript, React and SCSS</div>
                            <div className="col-12 med-quicksand custom-flex-home justify-content-center text-center over-1300 flex-wrap">I’m<span className="space-mid-sentence"></span><span className="bold">Michael Richardson</span><span className="over-350">,</span><span className="over-350 space-mid-sentence"></span><span className="over-350">thanks for stopping by! Please take a look around!</span></div>
                            <div className="col-12 small-filler over-1300"></div>
                            <div className="col-8 big-quicksand filler custom-flex-home justify-content-center over-1300 horizontal-line"></div>
                            <div className="col-12 less-med-quicksand text-center custom-flex-home justify-content-center align-items-center over-1300">A web and software developer with a specialization in JavaScript, React and SCSS</div>
                        </div>
                        <div className="col-12 filler"></div>
                        <div className="col-12 filler"></div>
                        <div className="fullscreen custom-flex-home justify-content-end">
                            <div className="">I have a lot to show you!</div>
                            <span className="space"></span>
                            <div className="d-flex justify-content-center align-items-center">
                            <Link to="work" spy={false} smooth={true}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pointer bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                     <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                                </svg>
                                </Link>
                            </div>
                            
                            <span className="space"></span>
                            <span className="space"></span>
                        </div>

                    </div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                </div>
                {/*second part/ work and about*/}
                <div id="work" className="background2">
                    <main className="container-fluid">
                        <div className="col-12 custom-filler"></div>
                        <div className="row d-flex justify-content-around flex-wrap">
                            <div className="col-12 text-center bolder big-quicksand big-margin-top custom-header-text">Featured Work</div>
                            <div className="col-12 custom-flex-home justify-content-center flex-wrap">
                                {projects?.filter((p: any) => {
                                    if (p.id <= 3) {
                                        return p;
                                    } else { }
                                }).map((p: any) => (
                                    <>
                                        <div key={`p-mobile-${p.id}`} className="col-md-3 justify-content-center text-center less-med-quicksand underlined under-766"> <span className="bold">{p.title}</span> </div>
                                        <div key={`p-${p.id}`} className="col-md-3 relative">
                                            <div key={`p-container-${p.id}`} onMouseEnter={handleOnProjects} onMouseLeave={handleOffProjects} className={`${border} pointer custom-flex-home justify-content-center align-items-center project-box pic-container`}>
                                                <img key={`p-image1-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                                <img key={`p-image2-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                                <img key={`p-image3-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                                <div key={`p-title-${p.id}`} className={`absolute position3 title-projects ${titleShow}`}>{p.title}</div>
                                            </div>
                                        </div>
                                    </>
                                ))
                                }
                                <div className="col-md-3 justify-content-center text-center less-med-quicksand under-766"> <button className="button">View More</button> </div>
                            </div>
                            <div className="col-md-6 pic-container2"> <img className="profile-pic circle" src="./assets/profilepic.jpg" alt="" /> </div>
                            <div className="col-md-6 margin-top-desc custom-med-quicksand d-flex align-items-center">
                                <div className="box"> <p> Hi again! I am a full-stack web developer currently looking for full-time work. I love coding as a whole but I have a passion for front-end UI/UX development and creating the most user-friendly experience possible.</p>
                                </div>
                            </div>
                            <div className="custom-flex-home justify-content-center align-items-center col-12">
                                <span onClick={handleLearnMore} className="pointer over-766 less-med-quicksand-permanent">learn more <img onClick={handleLearnMore} className={`${learnMore} side-drop-triangle`} src="./assets/triangle.png" alt="" /> </span>
                                <div className={`over-766 ${learnMoreObject}`}>
                                    <span className={`pointer`} onClick={() => history.push("/work")}> <span className="under-980">About my</span> work</span>
                                    <span className="space"></span>
                                    <span className={`pointer`} onClick={() => history.push("/about")}> <span className="under-980">About</span> me</span>
                                </div>
                            </div>
                            <div className="filler over-766"></div>
                            <div className="col-md-3 justify-content-center text-center less-med-quicksand under-766 mb-4"> <button className="button">More About Me</button> </div>
                        </div>
                    </main>
                </div>
                {/* third part/ contact */}
                <div id="contact" className="background4 d-flex justify-content-center flex-wrap">
                    <div className="filler col-12"></div>
                    <div className="filler col-12"></div>
                    <div className="col-12 text-center bolder big-quicksand custom-header-text white no-margin">Contact Me</div>
                    <div className="col-12 text-center less-med-quicksand-permanent under-500 white">If you have any questions, let me know!</div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="filler"></div>
                    <div className="col-12 d-flex justify-content-center"><input className="custom-contact-input width-input" type="text"/></div>
                    <div className="col-12 d-flex justify-content-center my-4"><input className="custom-contact-input width-input" type="text"/></div>
                    <div className="col-12 d-flex justify-content-center mb-5"><textarea className="custom-contact-input" name="message" id="message-area" cols={48} rows={10}></textarea></div>
                    <button className="btn btn-warning bolder mb-5">Send</button>
                    <div className="filler col-12"></div>
                    <div className="col-12 custom-flex-home justify-content-center over-500 text-muted text-center">*This site was made with React, SCSS, Express, and Node.</div>
                </div>
            </>
        )
    }
}

interface IHomeProps { };

export default Home;