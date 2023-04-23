import { useState, useEffect } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { EditorState } from "@codemirror/state"
import { EditorView } from "codemirror"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { python } from "@codemirror/lang-python"
import { php } from "@codemirror/lang-php"
import secondsToMinute from "@/utility/sec2min"

export default function Player({ answer, history, totalTime, lang }) {
    console.log(answer)
    console.log(JSON.stringify(history, null, 2));

    const [paused, setPaused] = useState(true)
    const [speed, setSpeed] = useState(200)
    const [currentTime, setCurrentTime] = useState(0)
    const [code, setCode] = useState(answer)

    const languageFunctions = {
        "HTML": html,
        "CSS": css,
        "JavaScript": () => javascript({ jsx: true }),
        "PHP": php,
        "Python": python
    }


    useEffect(() => {
        let x = currentTime;
        let interval = setInterval(function () {
            if (!paused) {

                x++;
                if (x > totalTime) {
                    clearInterval(interval)
                    setPaused(true)
                    setCurrentTime(0)
                } else {
                    setCurrentTime(x)
                }
            }
        }, speed)
        return () => clearInterval(interval);
    }, [paused, speed])

    useEffect(() => {
        if (!paused) {
            for (let i = 0; i < history.length; i++) {
                if (history[i].time === currentTime) {
                    setCode(history[i].answer)
                }
            }
        }
    }, [currentTime])


    const extensions = [languageFunctions[lang]?.(), EditorView.editable.of(false), EditorState.readOnly.of(true)]

    return (
        <div className="w-full h-full my-2 flex flex-col justify-between border border-grey">
            <div className="flex h-full">
                <CodeMirror
                    extensions={extensions}
                    value={code}
                    height="100%"
                    width="100%"
                />
            </div>
            <div className="flex border-t border-grey p-1">
                <button className="w-6 h-6 text-primaryColor mr-2" onClick={() => setPaused(!paused)}>
                    {
                        paused ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                    }
                </button>
                <div className="text-xs mr-2">
                    <button className={`w-8 h-6 border border-grey rounded-l ${speed === 1000 ? "active-btn" : ""}`} onClick={(e) => setSpeed(1000)}>1x</button>
                    <button className={`w-8 h-6 border border-grey border-l-0 ${speed === 500 ? "active-btn" : ""}`} onClick={() => setSpeed(500)}>2x</button>
                    <button className={`w-8 h-6 border border-grey border-l-0 rounded-r ${speed === 200 ? "active-btn" : ""}`} onClick={() => setSpeed(200)}>5x</button>
                </div>
                <div className="grow mr-2 flex">
                    <input className="grow" type="range" name="" id="" value={currentTime} onChange={(e) => setCurrentTime(parseInt(e.target.value))} min="0" max={totalTime} />
                </div>
                <div className="text-xs flex items-center mr-2"><span>{secondsToMinute(currentTime)}/{secondsToMinute(totalTime)}</span></div>
            </div>
        </div>
    )
}