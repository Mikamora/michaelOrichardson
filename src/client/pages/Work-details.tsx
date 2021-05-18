import * as React from "react"
import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import YoutubeEmbed from "../components/YoutubeEmbed";
import "../scss/work-details"

const WorkDetails: React.FC<IWorkDetailsProps> = (props) => {
    const history = useHistory();
    const w = window.localStorage.getItem("w")
    const { id } = useParams<{ id: string }>();
    const [loaded, setLoaded] = useState(false);
    const [loadedContent, setLoadedContent] = useState(false);
    const [projects, setProjects] = useState(null);
    const handleLoad = () => {
        setLoaded(true);
    };
    const handleLoad2 = () => {
        setLoadedContent(true);
    }
    useEffect(() => {
        setTimeout(async () => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 1500);
    }, [loaded]);
    useEffect(() => {
        setTimeout(async () => {
            handleLoad2(); //After three seconds call handleLoad(), which has setLoaded() === true.
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


    let handleContact = () => {
        if (location.pathname == "/") {
        } else {
            history.push("/");
            setTimeout(() => {
                document.getElementById("contact").scrollIntoView()
            }, 100)
        }
    }


    ///////// shape up
    const [numChildren, setNumChildren] = useState([]);
    const [recHeight, setRecHeight] = useState(null);
    const [recWidth, setRecWidth] = useState(null);
    const [cirRadius, setCirRadius] = useState(null);
    const [triHeight, setTriHeight] = useState(null);

    const [showShape, setShowShape] = useState(null);
    const [showHeight, setShowHeight] = useState(null);
    const [showRadius, setShowRadius] = useState(null);
    const [showArea, setShowArea] = useState(null);
    const [showPerimeter, setShowPerimeter] = useState(null);
    const [showWidth, setShowWidth] = useState(null);

    const submitRec = () => {
        const div = <ChildComponent recWidth={recWidth} recHeight={recHeight} offset={offset} updateColor={updateColor} />;
        setNumChildren([...numChildren, div]);
        setShowShape("Rectangle");
        setShowArea(recHeight * recWidth + "px");
        setShowHeight(recHeight + "px");
        setShowWidth(recWidth + "px");
        setShowRadius(null);
        setShowPerimeter((recHeight * 2) + (recWidth * 2) + "px");
    }
    const submitSqu = () => {
        const div = <ChildComponent recWidth={recWidth} recHeight={recHeight} offset={offset} updateColor={updateColor} />;
        setNumChildren([...numChildren, div]);
        setShowShape("Square");
        setShowArea(recHeight * recWidth + "px");
        setShowHeight(recHeight + "px");
        setShowWidth(recWidth + "px");
        setShowRadius(null);
        setShowPerimeter((recHeight * 2) + (recWidth * 2) + "px");
    }
    const submitTri = () => {
        let randomTri = randomVal(0, 5);
        const div = <ChildComponentTri random={randomTri} recWidth={triHeight} recHeight={triHeight} offset={offset} updateColor={updateColor} />;
        setNumChildren([...numChildren, div]);
        setShowShape("Triangle");
        setShowArea(0.5 * triHeight * triHeight + "px");
        setShowHeight(triHeight + "px");
        setShowWidth(triHeight + "px");
        setShowRadius(null);
        setShowPerimeter(2 * triHeight + (Math.sqrt(2)) * triHeight + "px");
    }
    const submitCir = () => {
        const div = <ChildComponentCir recWidth={cirRadius * 2} recHeight={cirRadius * 2} offset={offset} updateColor={updateColor} />;
        setNumChildren([...numChildren, div]);
        setShowShape("Circle");
        setShowArea(3.14 * Math.pow(cirRadius, 2) + "px");
        setShowHeight(null);
        setShowWidth(null);
        setShowRadius(cirRadius + "px");
        setShowPerimeter(3.14 * (2 * cirRadius) + "px");
    }
    const randomVal = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min; //random num in between 2
    }
    const updateColor = () => {
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)}, ${Math.random() * (1 - .5) + .5})`;
        return randomColor;
    }
    const offset = (offset: any) => {
        return Math.floor(Math.random() * (600 - offset));
    }
    const ChildComponent = (props: any) => <div className='shapes' style={{ width: `${props.recWidth}px`, height: `${props.recHeight}px`, left: `${props.offset(recWidth)}px`, top: `${props.offset(recHeight)}px`, backgroundColor: `${props.updateColor()}` }}></div>;
    const ChildComponentTri = (props: any) => {
        if (props.random == 1) {
            return (<div className='shapes' style={{ borderRight: `${props.recWidth}px solid ${props.updateColor()}`, borderTop: `${props.recWidth}px solid transparent`, width: `0px`, height: `0px`, left: `${props.offset(triHeight)}px`, top: `${props.offset(triHeight)}px` }}></div>)
        } else if (props.random == 2) {
            return (<div className='shapes' style={{ borderLeft: `${props.recWidth}px solid ${props.updateColor()}`, borderTop: `${props.recWidth}px solid transparent`, width: `0px`, height: `0px`, left: `${props.offset(triHeight)}px`, top: `${props.offset(triHeight)}px` }}></div>)
        } else if (props.random == 3) {
            return (<div className='shapes' style={{ borderLeft: `${props.recWidth}px solid ${props.updateColor()}`, borderBottom: `${props.recWidth}px solid transparent`, width: `0px`, height: `0px`, left: `${props.offset(triHeight)}px`, top: `${props.offset(triHeight)}px` }}></div>)
        } else if (props.random == 4) {
            return (<div className='shapes' style={{ borderRight: `${props.recWidth}px solid ${props.updateColor()}`, borderBottom: `${props.recWidth}px solid transparent`, width: `0px`, height: `0px`, left: `${props.offset(triHeight)}px`, top: `${props.offset(triHeight)}px` }}></div>)
        } else {
            return (<div className='shapes' style={{ borderRight: `${props.recWidth}px solid ${props.updateColor()}`, borderBottom: `${props.recWidth}px solid transparent`, width: `0px`, height: `0px`, left: `${props.offset(triHeight)}px`, top: `${props.offset(triHeight)}px` }}></div>)
        }
    }
    const ChildComponentCir = (props: any) => <div className='shapes' style={{ width: `${props.recWidth}px`, borderRadius: "50%", height: `${props.recHeight}px`, left: `${props.offset(cirRadius * 2)}px`, top: `${props.offset(cirRadius * 2)}px`, backgroundColor: `${props.updateColor()}` }}></div>;
    //////// console.log
    const [consoleStatement, setConsole] = useState("");
    const [consoleName, setConsoleName] = useState("Console")
    const [nameIt, setNameIt] = useState("dont-display")
    const cMessage = (passin: any) => {
        return (
            consoleStatement.toLowerCase().includes(`${passin}`)
        )
    }
    const displayMessage = () => {
        if (nameIt == "") {
            console.log(`${consoleName} is my name forever!! I dont know how I feel about it, but I'm sure it will grow on me. thanks!`)
            localStorage.setItem("consolename", `${consoleName}`)
            setNameIt("dont-display");
        } else {
            if (localStorage.getItem("saidhello")) {
                if (consoleStatement.includes("cya") || consoleStatement.includes("bye") || consoleStatement.includes("seeya") || consoleStatement.includes("peace out") || consoleStatement.includes("adios")) {
                    console.log("bye new friend!");
                    localStorage.removeItem("saidhello");
                } else if (cMessage("your") && cMessage("name") && consoleName == "Console" && !localStorage.getItem("consolename")) {
                    console.log(`I only have but one name ${consoleName}... I wish someone would name me....`)
                    localStorage.setItem("iwill", "iwill");
                } else if (cMessage("your") && cMessage("name") && localStorage.getItem("consolename")) {
                    console.log(`My name is ${localStorage.getItem("consolename")}! cool, huh?😎`)
                } else if (cMessage("i") && cMessage("name") && cMessage("you") && !localStorage.getItem("consolename") || cMessage("i will") && localStorage.getItem("iwill") && !localStorage.getItem("consolename") || cMessage("i will name you") || cMessage("i want to name you")) {
                    console.log("you will?!? alright what will it be?")
                    setNameIt("")
                } else if (cMessage("what") && cMessage("like")) {
                    console.log("Im incapable of liking things... unfortunately... but I will say that I like you because that is how I am programmed.")
                } else if (cMessage("how") && cMessage("old")) {
                    console.log("I have always been and will always be.... so about 1 computer year.")
                } else if (cMessage("i") && cMessage("like") && cMessage("you")) {
                    console.log("thank you, I like you too. well... I dont know you personally but you got this far into my creators website, so at the very least I respect you.")
                } else if (cMessage("i") && cMessage("like")) {
                    console.log("I'm incapable of such emotions but, I'm happy for you")
                } else if (cMessage("song")) {
                    console.log("I like ミユキ by Miraie & Milkoi. If I could play it for you I would... but here is the link to it, https://www.youtube.com/watch?v=XLckEelVZdE")
                } else if (cMessage("hello") || cMessage("hi") || cMessage("hey") || cMessage("hola")) {
                    console.log("hey again!")
                } else if (cMessage("how") && cMessage("are") && cMessage("you")) {
                    console.log("not bad, life's a bit hard... wired. Get it?")
                } else if (cMessage("how") && cMessage("you")) {
                    console.log("on a good day I dont.")
                } else if (cMessage("what") && cMessage("up")) {
                    console.log("it depends where you are. For me, the sky, but for a mole it would be the ground.")
                }
                else {
                    console.log("I dont understand...")
                }
            } else {
                if (consoleStatement.includes("hi") || consoleStatement.includes("hello") || consoleStatement.includes("hey") || consoleStatement.includes("hola")) {
                    localStorage.setItem("saidhello", "hey");
                    if (localStorage.getItem("rude")) {
                        console.log("thats better, whats up?")
                        localStorage.removeItem("rude");
                    } else {
                        console.log("Hello! What's up?")
                    }
                } else {
                    let ran = randomVal(0, 6);
                    if (ran == 1) {
                        console.log("wow, not even saying Hi... smh.")
                        localStorage.setItem("rude", "rude");
                    } else if (ran == 2) {
                        console.log("Who taught you manners?! You have to say Hi first.")
                        localStorage.setItem("rude", "rude");
                    } else if (ran == 3) {
                        console.log("C'mon... just be decent, say Hi!")
                        localStorage.setItem("rude", "rude");
                    } else if (ran == 4) {
                        console.log("If you want me to respond, you have to show me respect!")
                        localStorage.setItem("rude", "rude");
                    } else if (ran == 5) {
                        console.log(`... I dont respond to ${consoleStatement}`)
                        localStorage.setItem("rude", "rude");
                    }
                }
            }
        }
        setConsole("");
    }
    //////// tic tac toe
    const [newGame, setNewGame] = useState("no-display");
    const [computer, setComputer] = useState("computer");
    const [mode, setMode] = useState("");
    const [vs, setVs] = useState("vs");
    const displayComp = () => {
        setNewGame("");
        setVs("vs");
        setComputer("");
        setMode("comp")
    }
    const displayVs = () => {
        setNewGame("");
        setVs("");
        setComputer("computer");
        setMode("vs")
    }

    let routeProfile = () => {
        history.push(`/work`)
    }

    let board = document.querySelector("#board");
    let button = document.querySelector("#SubmitButtonRestart");
    let winningStatement = document.querySelector("#winningStatement");
    let whoseTurn = true;
    let cells = document.querySelectorAll(".new-row > div");
    // console.log(cells);
    board?.addEventListener("click", checkWin);
    button?.addEventListener("click", startOver);
    for (let i = 0; i < cells.length; i++) {
        cells[i]?.addEventListener("click", cellClicked);
    }

    function startOver() {
        location.reload();
    }
    const computerTurn = (e: any, cellsClicked: any) => {
        if (winningStatement.textContent == "X Wins!" || winningStatement.textContent == "Draw!") {
            return;
        } else {
            const random = randomVal(0, 9);
            console.log(random);
            const compare = cells[random];
            console.log(compare);
            if (Array.prototype.indexOf.call(cellsClicked, compare) == -1) {
                compare.classList.add("clicked");
                compare.textContent = "O";
                winningStatement.textContent = "X's turn";
                for (let i = 0; i < cells.length; i++) {
                    cells[i]?.addEventListener("click", cellClicked);
                }
                checkWin();
            } else {
                computerTurn(e, cellsClicked);
            }
        }

    }

    function cellClicked(e: any) {
        if (whoseTurn == true) {
            // let c = e.path[0].slice(0,3);
            // console.log(e.target);
            // console.log(cells[1])
            if (e.target.textContent == "O" || e.target.textContent == "X" || winningStatement.textContent == "O Wins!") {
                return;
            }
            if (mode == "vs") {
                e.target.textContent = "X";
                winningStatement.textContent = "O's turn";
                whoseTurn = false;
            } if (mode == "comp") {
                e.target.textContent = "X";
                winningStatement.textContent = "Computer's turn";
                // console.log(Array.prototype.indexOf.call(cells, e.target));
                cells[Array.prototype.indexOf.call(cells, e.target)].classList.add("clicked");
                let cellsClicked = document.querySelectorAll(".clicked");
                // console.log(cellsClicked);
                for (let i = 0; i < cells.length; i++) {
                    cells[i].removeEventListener("click", cellClicked);
                }
                setTimeout((e: any) => {
                    computerTurn(e, cellsClicked);
                }, 1000);

            }
        }
        else {
            if (e.target.textContent == "O" || e.target.textContent == "X" || winningStatement.textContent == "X Wins!") {
                return;
            }
            e.target.textContent = "O";
            winningStatement.textContent = "X's turn";
            whoseTurn = true;
        }
    }

    function checkWin() {
        function startOver() {
            location.reload();
        }
        if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);

        } else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
            winningStatement.textContent = "X Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
            winningStatement.textContent = "O Wins!";
            // win = true;
            board?.addEventListener("click", startOver);
        } else {
            if (cells[0].textContent != "" && cells[1].textContent != "" && cells[2].textContent != "" && cells[3].textContent != "" && cells[4].textContent != "" && cells[5].textContent != "" && cells[6].textContent != "" && cells[7].textContent != "" && cells[8].textContent != "") {
                winningStatement.textContent = "Draw!";
                // win = true;
                board?.addEventListener("click", startOver);
            }
        }
    }

    if (w == "") {
        return (
            <>
            </>
        )
    } else if (loaded && w == "w") {
        if (id == "1" || id == "2" || id == "5" || id == "7") {
            return (
                <>
                    <main className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="space-above col-12"></div>
                            {projects ? (<> <div className="col-12 text-center work-detail-header">{projects[Number(id) - 1].title}</div>
                                <YoutubeEmbed embedId={`${projects[Number(id) - 1].vid_url.slice(32, projects[Number(id) - 1].vid_url.length)}`} />
                                <div className="space-above col-12"></div>
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="line"></div>
                                </div>
                                <div className="description text-center">{projects[Number(id) - 1].description}</div>
                                <div className="space-above-small col-12"></div>
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="line"></div>
                                </div>
                                <div className="space-above col-12"></div>
                            </>) : (<div></div>)}
                            <div className="d-flex justify-content-between col-12">
                                <a href="https://www.facebook.com/michael.richardson.98892615" target="_blank"><span className="socials"><img className="facebook" src="/assets/fb.png" alt="" /></span></a>
                                <a href="https://github.com/Mikamora" target="_blank"><img src="/assets/github.png" className="socials" alt="" /></a>
                                <a href="https://www.linkedin.com/in/michael-richardson-0ab290187/" target="_blank"><img className="socials" src="/assets/linkedin.png" alt="" /></a>
                            </div>
                            <div className="col-12 flex-wrap d-flex justify-content-around align-items-center">
                                <div className="btn email-under-work" onClick={handleContact}>mrichardson@mrcreative.dev</div>
                                <Link className="back-to-work text-center" to={"/work"}>Back to work</Link>
                            </div>
                            <div className="space-above col-12"></div>
                        </div>
                    </main>
                </>
            )
        }
        //shapeup
        else if (id == "3") {
            return (
                <>
                    <main className="container">
                        <div className="space-above col-12"></div>
                        {projects ? (<> <div className="col-12 text-center work-detail-header">{projects[Number(id) - 1].title}</div></>) : (<div></div>)}
                        <form className="form col-12" action="">
                            <div>
                                <input type="text" name="rectangle-height" onChange={(e) => setRecHeight(e.target.value)} id="rectangle-height" placeholder="rectangle-height" />
                            </div>
                            <div>
                                <input type="text" name="rectangle-width" onChange={(e) => setRecWidth(e.target.value)} id="rectangle-width" placeholder="rectangle-width" />
                                <button type="button" className="button" onClick={submitRec}>Submit Rectangle</button>
                            </div>
                            <div>
                                <input type="text" name="square-length" onChange={(e) => { setRecHeight(e.target.value); setRecWidth(e.target.value) }} id="square-length" placeholder="square-length" />
                                <button type="button" className="button" onClick={submitSqu}>Submit Square</button>
                            </div>
                            <div>
                                <input type="text" name="circle-radius" onChange={(e) => setCirRadius(e.target.value)} id="circle-radius" placeholder="circle-radius" />
                                <button type="button" className="button" onClick={submitCir}>Submit Circle</button>
                            </div>
                            <div>
                                <input type="text" name="triangle-height" onChange={(e) => setTriHeight(e.target.value)} id="triangle-height" placeholder="triangle-height" />
                                <button type="button" className="button" onClick={submitTri}>Submit Triangle</button>
                            </div>
    
                        </form>
                        <div className="canvas-container d-flex justify-content-center flex-wrap">
                            <div className="canvas col-lg-8">
                                {numChildren.map((child: any, index: any) => (
                                    child
                                ))}
                            </div>
                            <div className="specs col-lg-3">
                                <li className="bold" id="Shape">Shape Name: {showShape}</li>
                                <li className="bold" id="Width">Width: {showWidth}</li>
                                <li className="bold" id="Height">Height: {showHeight}</li>
                                <li className="bold" id="Radius">Radius: {showRadius}</li>
                                <li className="bold" id="Area">Area: {showArea}</li>
                                <li className="bold" id="Perimeter">Perimeter: {showPerimeter}</li>
                            </div>
                        </div>
                        {projects ? (<> <div className="space-above col-12"></div>
                        <div className="mobile-big-space col-12"></div>
                            <div className="col-12 d-flex justify-content-center">
                                <div className="line"></div>
                            </div>
                            <div className="description text-center">{projects[Number(id) - 1].description}</div>
                            <div className="space-above-small col-12"></div>
                            <div className="col-12 d-flex justify-content-center">
                                <div className="line"></div>
                            </div>
                            <div className="space-above col-12"></div> </>) : (<div></div>)}
                        <div className="d-flex justify-content-between col-12">
                            <a href="https://www.facebook.com/michael.richardson.98892615" target="_blank"><span className="socials"><img className="facebook" src="/assets/fb.png" alt="" /></span></a>
                            <a href="https://github.com/Mikamora" target="_blank"><img src="/assets/github.png" className="socials" alt="" /></a>
                            <a href="https://www.linkedin.com/in/michael-richardson-0ab290187/" target="_blank"><img className="socials" src="/assets/linkedin.png" alt="" /></a>
                        </div>
                        <div className="col-12 flex-wrap d-flex justify-content-around align-items-center">
                            <div className="btn email-under-work" onClick={handleContact}>mrichardson@mrcreative.dev</div>
                            <Link className="back-to-work text-center" to={"/work"}>Back to work</Link>
                        </div>
                        <div className="space-above col-12"></div>
                    </main>
                </>
            )
        }
        //console
        else if (id == "4") {
            return (
                <>
                    <main className="container">
                        <div className="row">
                            {projects ? (<>
                                <div className="space-above col-12"></div>
                                <div className="col-12 text-center work-detail-header under-601">{projects[Number(id) - 1].description}</div>
                                <div className="space-above col-12"></div>
                                <div className="d-flex col-12 justify-content-center"><input onChange={e => setConsole(e.target.value)} value={consoleStatement} type="text" placeholder="say hello..." /></div>
                                <div className="space-above col-12"></div>
                                <div className="d-flex col-12 justify-content-center"><button className="btn btn-dark" onClick={displayMessage}>send message</button></div>
                                <div className="space-above col-12"></div>
                                <div className={`d-flex col-12 justify-content-center ${nameIt}`} ><input className={`${nameIt}`} onChange={e => setConsoleName(e.target.value)} value={consoleName} type="text" placeholder="whats the new name?" /></div>
                                <div className="space-above col-12"></div>
                                <div className={`d-flex col-12 justify-content-center ${nameIt}`}><button className={`btn btn-dark ${nameIt}`} onClick={displayMessage}>set name</button></div>
                            </>) : (<div></div>)}
                            <div className="col-12 d-flex justify-content-center">
                                <div className="line"></div>
                            </div>
                            <div className="space-above col-12"></div>
                            <div className="d-flex justify-content-between col-12">
                                <a href="https://www.facebook.com/michael.richardson.98892615" target="_blank"><span className="socials"><img className="facebook" src="/assets/fb.png" alt="" /></span></a>
                                <a href="https://github.com/Mikamora" target="_blank"><img src="/assets/github.png" className="socials" alt="" /></a>
                                <a href="https://www.linkedin.com/in/michael-richardson-0ab290187/" target="_blank"><img className="socials" src="/assets/linkedin.png" alt="" /></a>
                            </div>
                            <div className="col-12 flex-wrap d-flex justify-content-around align-items-center">
                                <div className="btn email-under-work" onClick={handleContact}>mrichardson@mrcreative.dev</div>
                                <Link className="back-to-work text-center" to={"/work"}>Back to work</Link>
                            </div>
                            <div className="space-above col-12"></div>
                        </div>
                    </main>
                </>
            )
        }
        //tic tac toe
        else if (id == "6") {
            return (
                <>
                    <div id="board">
                        <h1 className="title-tic">{projects?.[5].title}</h1>
    
                        <div className="col-12 d-flex justify-content-center title-tic"><button className={`button no-filter ${computer}`} onClick={displayComp}>Vs Computer</button><button className={`button no-filter ${vs}`} onClick={displayVs}>Local multiplayer</button></div>
                        <div className={`${newGame} space-above col-12`}></div>
                        <h3 id="winningStatement" className={`${newGame} `}>{`${newGame} X's turn`}</h3>
                        <div className={`${newGame} space-above col-12`}></div>
                        <div className={`${newGame} new-row`}>
                            <div className={`${newGame} top left`}></div>
                            <div className={`${newGame} top middle`}></div>
                            <div className={`${newGame} top right`}></div>
                        </div>
                        <div className={`${newGame} new-row`}>
                            <div className={`${newGame} middle left`}></div>
                            <div className={`${newGame} center`}></div>
                            <div className={`${newGame} middle right`}></div>
                        </div>
                        <div className={`${newGame} new-row`}>
                            <div className={`${newGame} bottom left`}></div>
                            <div className={`${newGame} bottom middle`}></div>
                            <div className={`${newGame} bottom right`}></div>
                        </div>
                    </div>
                    <button id="SubmitButtonRestart" className={`${newGame} `}>restart</button>
                </>
            )
        }
        //if doesnt exist
        else {
            return (
                <>
                <main className="container d-flex justify-content-center flex-wrap">
                        <div className="col-12">
                            <button onClick={routeProfile} className="btn btn-warning goback-margin mt-5">Go Back?</button>
                        </div>
                        <div className="bl-abril-text col-12 text-center">This project doesnt exist yet...</div>
                        <div className="spacing-100 col-12"></div>
                        <div className="spacing-50 col-12"></div>
                        <div className="bl-small-quicksand-text text-muted text-center col-12">contact me and we can get started on bringing it to life!</div>
                        <button onClick={handleContact} className="btn btn-warning">Let's Get To Work!</button>
                    </main>
                </>
            )
        }
    } else if (!loaded) {
        return (
            <>
            <div className="loader">Loading...</div>
            </>
        )
    }
}

interface IWorkDetailsProps { };

export default WorkDetails;