import Head from "next/head"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/router"
import Review from "@/components/review"
import Test from "@/components/test"

export default function Interview({ interviewData }) {
    const router = useRouter()
    const { applyId, interviewId, name, email } = router.query

    let questions
    if (typeof router.query.questions === "string") {
        questions = [router.query.questions]
    } else {
        questions = router.query.questions
    }

    console.log("&&&&&&&&&&", typeof questions)
    return (
        <>
            <Head>
                <title>Interview Wizard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 className="text-xs">Interview Wizard</h1>
                {
                    interviewData ? (
                        <Review interviewData={interviewData} />
                    ) : (
                        <Test name={name} email={email} questions={questions} applyId={applyId} interviewId={interviewId} />
                    )
                }
            </div>
        </>
    )
}


export async function getServerSideProps({ params }) {
    let interviewData = null
    try {
        const docRef = doc(db, "interview", params.id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data())
            interviewData = docSnap.data()
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error(error)
    }
    return { props: { interviewData } }
}

