import * as React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "../scss/home";



const Home: React.FC<IHomeProps> = () => {


    const [loaded, setLoaded] = useState(false);
    const [projects, setProjects] = useState(null)
    const w = localStorage.getItem("w");
    const handleLoad = () => {
        setLoaded(true);
    };
    useEffect(() => {
        setTimeout(async () => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 2000);
    }, [loaded]);

    useEffect(() => {(
        async () => {
            const res = await fetch("/projects");
            const projects = await res.json();
            setProjects(projects);
        }
    )()
    }, [])

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pointer bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                <Link to="work" spy={false} smooth={true}> <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" /></Link>
                            </svg>
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
                <main className="container">
                    <div className="col-12 custom-filler"></div>
                    <div className="row d-flex flex-wrap">
                        <div className="col-12 text-center bolder big-quicksand big-margin-top custom-header-text">Featured Work</div>
                        { projects?.filter((p: any) => {
                            if(p.id <= 3) {
                                return p;
                            } else {}
                        }).map((p: any) => (
                                <>
                                <div className="col-3 box">
                                    {p.image_url}
                                </div>
                                </>
                        ))
                        }

                    </div>
                </main>
                </div>
                {/* third part/ contact */}
                <div className="background4"></div>
            </>
        )
    }
}

interface IHomeProps { };

export default Home;