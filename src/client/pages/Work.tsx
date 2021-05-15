import * as React from "react"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../scss/work";

const Work: React.FC<IWorkProps> = () => {

    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const [projects, setProjects] = useState(null);
    const [blur, setBlur] = useState("blur-off");
    const [titleShow, setTitleShow] = useState("title-off");
    const [border, setBorder] = useState("");
    const w = localStorage.getItem("w");
    const handleLoad = () => {
        setLoaded(true);
    };

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

    if (w == "w") {

        return (
            <>
                <img className="background-line" src="./assets/homepageline.png" alt="" />
                <main className="container">
                    <div className="row">
                        <div className="col-12 text-center bolder big-quicksand custom-header-text">Work</div>
                        <div className="d-flex col-12 flex-wrap justify-content-center">
                            {projects?.map((p: any) => (
                                <>
                                    <div key={`p-mobile-${p.id}`} className="col-md-3 justify-content-center text-center less-med-quicksand underlined under-766"> <span className="bold">{p.title}</span> </div>
                                    <div key={`p-${p.id}`} className="col-md-4 relative">
                                        <div key={`p-container-${p.id}`} onClick={() => { if (p.id == "4") {console.clear()}; history.push(`/work/${p.id}`) }} onMouseEnter={handleOnProjects} onMouseLeave={handleOffProjects} className={`${border} pointer custom-flex-home justify-content-center align-items-center project-box pic-container`}>
                                            <img key={`p-image1-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                            <img key={`p-image2-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                            <img key={`p-image3-${p.id}`} src={p.image_url} className={`${blur} inside-pic`} alt="" />
                                            <div key={`p-title-${p.id}`} className={`absolute position3 title-projects ${titleShow}`}>{p.title}</div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="text-center">+ this portfolio</div>
                        <div className="filler"></div>
                    </div>
                </main>
            </>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

interface IWorkProps { };

export default Work;