import Head from "next/head"
import { useState, useEffect } from "react"
import { db } from "@/firebase"
import { doc, getDoc } from "firebase/firestore"
import secondsToMinute from "@/utility/sec2min"
import Link from "next/link"

export default function Dashboard({ dashboardData }) {
    const [baseUrl, setBaseUrl] = useState("")
    const applyLink = dashboardData.applyLink

    useEffect(() => {
        setBaseUrl(window.location.origin)
    }, [])

    return (
        <>
            <Head>
                <title>Interview Wizard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div>
                <h1 className="text-xs">Interview Wizard</h1>
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="py-2">This is your interview dashboard. When a candidate completes an interview, their response will show up below. Share this page with colleagues and evaluate responses together.
                </p>
                <p className="py-2">Invite candidates by sending them the interview link below or add it to a job posting and let them come to you.
                </p>
                <p className="py-2">Interview link: <button className="underline text-primaryColor">
                    <Link href={`/apply/${applyLink}`}>{`${baseUrl}/apply/${applyLink}`}</Link></button>
                </p>
                <div className="border-t border-grey py-4">
                    <h3 className="font-bold">Responses</h3>
                    {
                        dashboardData.applicants.length ? (
                            <div className="py-2">
                                {dashboardData.applicants.map((applicant, index) => {
                                    return (
                                        <p key={index}>
                                            <span className="mr-8">{applicant.time}</span>
                                            <span className="underline text-primaryColor">
                                                <Link href={`/interview/${applicant.interviewId}`}>
                                                    {applicant.name},
                                                </Link>
                                            </span>
                                            {applicant.email} ({secondsToMinute(applicant.totalDuration)})
                                        </p>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className="py-2">No responses yet. Start by sending the interview link above to your candidates.</p>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    let applyLink
    let dashboardData = null
    try {
        const dashboardRef = doc(db, "dashboard", params.id)
        const dashboardSnap = await getDoc(dashboardRef)

        if (dashboardSnap.exists()) {
            applyLink = dashboardSnap.data().applyLink
        } else {
            console.log("No such document!")
        }

        const applyRef = doc(db, "apply", applyLink)
        const applySnap = await getDoc(applyRef)

        if (applySnap.exists()) {
            dashboardData = applySnap.data()
            dashboardData.applyLink = applyLink
        } else {
            console.log("No such document!")
        }
    } catch (error) {
        console.error(error)
    }
    return { props: { dashboardData } }
}
