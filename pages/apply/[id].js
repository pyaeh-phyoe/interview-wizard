import Head from "next/head"
import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState } from "react"
import Player from "@/components/player"
import { answer, history, totalTime } from "@/data"

export default function Apply({ dashboardData }) {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const addApplicant = async (e) => {
        e.preventDefault()
        const uniqueId = randomString()
        const uniqueLink = "/interview/" + uniqueId
        const questions = dashboardData.questions
        const applyId = dashboardData.applyId

        router.push({
            pathname: uniqueLink,
            query: { name, email, questions, applyId, interviewId: uniqueId }
        }, uniqueLink)
    }

    return (
        <>
            <Head>
                <title>Interview Wizard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <h1 className="text-xs	">Interview Wizard</h1>
                <h1 className="text-4xl font-bold">Welcome</h1>
                <div className="pb-8">
                    <p className="py-2">You are about to take an online technical interview.
                    </p>
                    <p className="py-2">In this interview, you will be shown a number of questions and asked to answer each one in turn. Your answers will be stored online for you and your interviewer to view once you&apos;ve finished.
                    </p>
                    <p className="py-2">It&apos;s not just your final answer that&apos;s important - it&apos;s how you get there. Your interviewer will be able to see your answer unfold as if they were sitting at the keyboard next to you. They&apos;re more interested in your thought process and method than if you dropped a semicolon somewhere.
                    </p>
                    <p className="py-2">When you&apos;re ready, enter your details below and click Start to begin. You&apos;ll be able to see all of your answers at the end.
                    </p>
                    <p className="py-2">Best of luck!
                    </p>
                </div>

                <div className="border-t border-grey py-4">
                    <h3 className="font-bold">Example</h3>

                    <p className="py-2">Let&apos;s say you were asked the following question:</p>
                    <blockquote className="p-4 border border-grey rounded bg-[antiquewhite]">
                        <p>Write a program that prints the numbers from 1 to 100. But for multiples of three print &quot;Fizz&quot; instead of the number and for the multiples of five print &quot;Buzz&quot;. For numbers which are multiples of both three and five print &quot;FizzBuzz&quot;.</p>
                    </blockquote>
                    <p className="py-2">You would type your solution into the textbox and hit Submit when you&apos;re happy with it. You and your interviewer would then see something like this:</p>

                </div>
                <Player lang={"JavaScript"} answer={answer} history={history} totalTime={totalTime}></Player>
                <form onSubmit={e => addApplicant(e)} className="py-4">
                    <div className="py-2 flex">
                        <label className="w-2/12" htmlFor="name">Name</label>
                        <input className="border border-grey rounded" required type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="py-2 flex">
                        <label className="w-2/12" htmlFor="email">Email</label>
                        <input className="border border-grey rounded" required type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="py-4">
                        <button className="btn-type-1">Start the Interview</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    let dashboardData = null
    try {
        const docRef = doc(db, "apply", params.id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            dashboardData = docSnap.data()
            dashboardData.applyId = params.id
        } else {
            console.log("No such document!")
        }
    } catch (error) {
        console.log(error)
    }
    return { props: { dashboardData } }
}

const randomString = () => {
    return new Date().getTime().toString(36)
}

