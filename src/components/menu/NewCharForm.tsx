import { useState } from 'react';
import IncDecCounter from '../util/newCharAttribs/Counter';
export const NewCharForm = () => {

    const [points, setPoints] = useState(5)

    const calculatePoints = (pointValue: number) => {
        setPoints(points + pointValue)
    }

    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-3 px-3">
                <div className="md:w-2/5">
                    <label className="block text-indigo-100 pd-3 text-left pr-4" htmlFor="inline-full-name">
                        Your name:
                    </label>
                </div>
                <div className="md:w-3/5">
                    <input className="bg-indigo-100 appearance-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Darth Revan" />
                </div>
            </div>
            <div className="mb-4">

                <IncDecCounter type="Strength" updateTotalPoints={calculatePoints} currentPoints={points} />
                <IncDecCounter type="Wisdom" updateTotalPoints={calculatePoints} currentPoints={points} />
                <IncDecCounter type="Constitution" updateTotalPoints={calculatePoints} currentPoints={points} />
                <IncDecCounter type="Intelligence" updateTotalPoints={calculatePoints} currentPoints={points} />
                <IncDecCounter type="Agility" updateTotalPoints={calculatePoints} currentPoints={points} />
                <IncDecCounter type="Luck" updateTotalPoints={calculatePoints} currentPoints={points} />

            </div>
            <div className="mb-3">Points remaining: {points}</div>
            <button className="p-1 w-[75%] text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/95 border-indigo-600 hover:bg-indigo-500/70">Generate Character</button>
        </form>
    )
}
