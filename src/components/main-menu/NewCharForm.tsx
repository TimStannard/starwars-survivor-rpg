// react
import { useState, useContext } from "react"
// types
import { charType } from '../../types/char';
// // context
import { CharacterContext } from "../../context/characterData";
// consts
import { attributes } from "../../consts/character";
// components
import StatPicker from '../util/newCharAttribs/StatPicker';

type Props = {
    setPage: (location: string) => void
};

export const NewCharForm = ({ setPage }: Props) => {
    // Use useContext to access the character data and setter function
    const { setCharData } = useContext(CharacterContext);
    const updateCharData = (newCharData: charType) => {
        // Call the setter function to update the character data
        setCharData(newCharData);
    };


    // user input state
    const [charName, setName] = useState<string>('')
    const [charStats, setCharStats] = useState<charType['stats']>({
        strength: 5,
        intelligence: 5,
        agility: 5,
        perception: 5,
        constitution: 5,
        luck: 5
    });

    // handling the attribute points logic
    const [points, setPoints] = useState(5)
    const calculatePoints = (pointValue: number) => {
        setPoints(points + pointValue)
    }

    // submit
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        // set default stats + user inputted choices
        updateCharData({
            name: charName,
            alignment: 50,
            items: [
                {
                    id: 1,
                    name: "Test",
                    type: "armour",
                    img: "test",
                }
            ],

            forcePoints: {
                cur: 50,
                max: 50
            },
            hp: {
                cur: 50,
                max: 50
            },
            stats: charStats,
            skills: {}
        })
        setPage("generate");
    };

    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center mb-4 px-3">
                <div className="w-2/5">
                    <label className="block text-indigo-100 pd-3 text-left pr-4" htmlFor="inline-full-name">
                        Your name:
                    </label>
                </div>
                <div className="w-3/5">
                    <input
                        value={charName}
                        onChange={e => setName(e.target.value)}
                        className="bg-indigo-100 rounded appearance-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jar Jar Binks" />
                </div>
            </div>
            <div className="mb-3">
                {attributes.map((attribute, index) => (
                    <StatPicker
                        key={`${index}-${attribute.toLowerCase()}`}
                        statType={attribute}
                        updateTotalPoints={calculatePoints}
                        currentPoints={points}
                        updateCurrentStats={setCharStats}
                        stats={charStats}
                    />
                ))}
            </div>
            <div className="mb-5 py-1 px-2 inline-block rounded-lg bg-indigo-100/20 text-sm">Points remaining: {points}</div>
            <button className="p-2 w-[75%] rounded text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/95 border-indigo-600 hover:bg-indigo-500/70"
            >Generate Character <i className="bi bi-arrow-right relative top-[1px]"></i></button>
        </form>
    )
}
