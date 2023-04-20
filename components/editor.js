import CodeMirror from "@uiw/react-codemirror"
import { useCallback } from "react"
import { javascript } from "@codemirror/lang-javascript"
import { html } from "@codemirror/lang-html"
import { css } from "@codemirror/lang-css"
import { python } from "@codemirror/lang-python"
import { php } from "@codemirror/lang-php"

export default function Editor({ answer, setAnswer, lang, setLang }) {
    const languageFunctions = {
        "HTML": html,
        "CSS": css,
        "JavaScript": () => javascript({ jsx: true }),
        "PHP": php,
        "Python": python
    };

    const onChange = useCallback((value) => {
        setAnswer(value)
    }, [])
    return (
        <div>
            <div className="py-4">
                <span>Language: </span>
                <select className="border border-grey rounded py-1" id="cars" value={lang}
                    onChange={(e) => {
                        setLang(e.target.value)
                    }}>
                    {
                        Object.keys(languageFunctions).map((language, index) => {
                            return <option key={index} value={language}>{language}</option>
                        })
                    }
                </select>
            </div>
            <div className="border border-grey min-h-[360px]	">
                <CodeMirror
                    value={answer}
                    height="100%"
                    width="100%"
                    extensions={[languageFunctions[lang]?.()]}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}