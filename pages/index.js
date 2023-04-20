import Head from "next/head"
import Link from "next/link"
import Player from "@/components/player"

export default function Home() {
  return (
    <>
      <Head>
        <title>Interview Wizard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-xs	">Interview Wizard</h1>
        <div className="flex">
          <div className="w-6/12 mr-8">
            <h1 className="text-4xl	font-bold	">Hire the best developers</h1>
            <p className="py-2">Don&apos;t waste time interviewing developers who aren&apos;t suitable for the job. Find out quickly how well someone can code. With Interview Wizard, you set your own programming challenges and watch how candidates solve them online.</p>

            <p className="py-2">Capture the candidate&apos;s thought process and problem solving speed. See how they structure and revise their code over time. Evaluate their programming ability before you invest time in a face-to-face interview.</p>
            <div className="py-3">
              <button className="btn-type-1">
                <Link href="/create">Create an Interview</Link>
              </button>
            </div>
          </div>
          <div className="w-6/12">
            <Player lang={"JavaScript"}/>
          </div>
        </div>
        <div className="flex py-16">
          <div className="p-2	">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>

            </div>
            <div>
              <h3 className="font-bold">Create</h3>
              <p>
                Create the questions you&apos;d like candidates to answer. Be as creative and job-specific as you like.
              </p>
            </div>
          </div>

          <div className="p-2	">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold">
                Invite</h3>
              <p>Invite candidates individually or post the interview link on a job board and let candidates come to you.</p>
            </div>
          </div>
          <div className="p-2	">
            <div>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-bold">Review</h3>
              <p>Collaboratively review the recorded interviews in your own time. Save time and money identifying the best developers.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



