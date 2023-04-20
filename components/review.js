import Player from "./player"
import secondsToMinute from "@/utility/sec2min"

export default function Review({interviewData}) {
    console.log(interviewData)
    return (
        <div>
            <h2 className="text-4xl font-bold">{interviewData.name}</h2>
            <h3>Total duration: {secondsToMinute(interviewData.totalDuration)}</h3>
            <div>
                {
                    interviewData.data.map((data, index) => {
                        return (
                            <div className="pt-8" key={index}>
                                <h3 className="font-bold">Question {index + 1}</h3>
                                <p className="py-2">{data.question}</p>
                                <Player answer={data.answer} history={data.history} totalTime={data.totalTime} lang={data.lang} />
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}