import Head from "next/head"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react"

export default function Create({ uniqueLink }) {
    const [email, setEmail] = useState("");
    const [questions, setQuestions] = useState([]);
    const router = useRouter()

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }


    const createInterview = async (e) => {
        e.preventDefault()
        console.log(uniqueLink)
        console.log(questions)
        const applyLink = randomString()
        const filteredElem = questions.map((question) => {
            return question.text
        })
        console.log(filteredElem)
        try {
            await setDoc(doc(db, "apply", applyLink), {
                questions: filteredElem,
                applicants: []
            });
            await setDoc(doc(db, "dashboard", uniqueLink), {
                email,
                applyLink,
            });
            router.push(`/dashboard/${uniqueLink}`)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    function removeElement(indexToRemove) {
        console.log(indexToRemove)
        setQuestions((current) =>
            current.filter((question) => question.id !== indexToRemove.toString())
        )
    }

    const editQuestion = (id, value) => {
        const updatedQuestions =
            questions.map((question) => {
                console.log(question)
                console.log()
                if (question.id === id) {
                    console.log(question)
                    question.text = value
                }
                return question
            })
        console.log(updatedQuestions)
        setQuestions(updatedQuestions)

    }

    function createAQuestion() {
        const newQuestion = {}
        const uniqueId = randomString()
        newQuestion.id = uniqueId
        newQuestion.text = ""
        setQuestions([...questions, newQuestion])
        console.log(questions)

    }

    useEffect(() => {
        scrollToBottom();

    }, [questions])

    useEffect(() => {
        createAQuestion()

    }, [])

    return (
        <>
            <Head>
                <title>Interview Wizard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <h1 className="text-xs	">Interview Wizard</h1>
                <h1 className="text-4xl font-bold">Create an Interview</h1>
                <p className="py-2">Start by creating a question you would like candidates to answer. This can be anything you like, but an open-ended question requiring a creative solution gives the candidate the best opportunity to demonstrate their ability and thought process.
                </p>
                <p className="py-2">Once saved, we&apos;ll create a private interview link for you to share, as well as a dashboard for you to review all of your responses.
                </p>

                <form onSubmit={(e) => createInterview(e)}>
                    <div className="py-2">
                        <div className="py-2 flex">
                            <label className="w-2/12" htmlFor="email">Your Email</label>
                            <input className="border border-grey rounded" required type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div id="question_list" className="">
                            {
                                questions.map((question, index) => {
                                    return (
                                        <div key={question.id} className="flex py-2">
                                            <label className="w-2/12">Question</label>
                                            <textarea required className="border border-grey rounded	grow" name="" id="" cols="30" rows="10" onChange={e => editQuestion(question.id, e.target.value)}></textarea>
                                            {/* <button onClick={() => removeElement(question.id)}>Delete {questions.length}</button> */}
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-between py-3">
                        <button className="flex" onClick={createAQuestion}>
                            <span className="text-primaryColor">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <span>Add Another Question</span>
                        </button>

                        <button className="btn-type-1">
                            Save And Invite Candidates
                        </button>
                    </div>
                </form>
                <div ref={messagesEndRef} />
            </div>
        </>
    )
}



export async function getServerSideProps() {
    const uniqueLink = randomString()
    return {
        props: {
            uniqueLink
        }
    };
}

const randomString = () => {
    return new Date().getTime().toString(36)
}