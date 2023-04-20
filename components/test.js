import { useState, useEffect } from "react"
import { db } from "@/firebase";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore"
import Editor from "./editor"
import { useRouter } from 'next/router';

export default function Test({ name, email, questions, applyId, interviewId }) {
    const router = useRouter()
    const [answers, setAnswers] = useState([])
    const [answer, setAnswer] = useState("")
    const [time, setTime] = useState(0)
    const [data, setData] = useState([])
    const [history, setHistory] = useState([])
    const [index, setIndex] = useState(0)
    const [totalTime, setTotalTime] = useState([])
    const [lang, setLang] = useState("JavaScript")
    let interval

    const uploadAnswer = async () => {
        let totalDuration = 0
        let data = []
        for (let index = 0; index < questions.length; index++) {
            let element = {}
            totalDuration += totalTime[index]
            element.question = questions[index]
            element.answer = answers[index]
            element.history = history[index]
            element.totalTime = totalTime[index]
            data.push(element)
        }
        console.log(d)

        try {
            const docRef = doc(db, "apply", applyId)

            await updateDoc(docRef, {
                applicants: arrayUnion({ name, email, interviewId, totalDuration, time: new Date().toString() })
            });

            await setDoc(doc(db, "interview", interviewId), {
                totalDuration,
                lang,
                name,
                data
            });
            alert("You did it! Congratulations on finishing your test!")
            router.reload()

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (index < questions.length) {
            interval = setInterval(() => {
                setTime(time + 1)
                const newObject = { time: time + 1, answer };
                setData([...data.filter((item) => item.answer !== answer), newObject]);
            }, 1000)
        }

        return () => clearInterval(interval);
    }, [time])

    const submitAnswer = () => {
        confirm("Once submitted, you will not be able to edit your solution. Continue?")
        clearInterval(interval)
        if (index < questions.length) {
            setAnswers([...answers, answer])
            setHistory([...history, data])
            setTotalTime([...totalTime, time])
            setIndex(index + 1)
            setAnswer("")
            setTime(0)
            setData([])
        }
    }

    useEffect(() => {
        if (index === questions.length) {
            uploadAnswer()
        }
    }, [index])

    return (
        <div>
            <h3 className="text-4xl font-bold">Question</h3>
            <p className="py-2">
                {
                    questions[index]
                }
            </p>
            <Editor setAnswer={setAnswer} answer={answer} lang={lang} setLang={setLang} />
            <div className="py-2">
                <button className="btn-type-1" onClick={submitAnswer}>Submit Solution</button>
            </div>
        </div>
    )
}