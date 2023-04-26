import { useState, useEffect } from "react";

type Stats = {
    strength: number;
    intelligence: number;
    agility: number;
    perception: number;
    constitution: number;
    luck: number;
}

type Props = {
    statType: string;
    currentPoints: number;
    stats: Stats;
    updateTotalPoints: (pointValue: number) => void;
    updateCurrentStats: (stats: Stats) => void;
};

function getTextColor(value: number) {
    if (value >= 1 && value <= 2) {
        return 'text-red-300';
    }
    if (value === 3) {
        return 'text-red-200';
    }
    if (value >= 4 && value <= 6) {
        return 'text-indigo-100';
    }
    if (value === 7 || value === 8) {
        return 'text-green-200';
    }
    if (value > 8) {
        return 'text-green-300';
    }
}

function StatPicker({ statType, currentPoints, stats, updateTotalPoints, updateCurrentStats }: Props) {

    const [num, setNum] = useState(5);
    const incNum = () => {
        if (num < 10 && currentPoints > 0) {
            setNum(Number(num) + 1)
            updateTotalPoints(-1)
        }
    };
    const decNum = () => {
        if (num > 1) {
            setNum(num - 1)
            updateTotalPoints(1)
        }
    }

    // update data if stat number is changed
    useEffect(() => {
        updateCurrentStats(
            {
                ...stats,
                [statType.toLowerCase()]: num
            }
        )
    }, [num])

    return (
        <div className="flex mb-1 px-3">
            <div className="w-3/5">
                <label className="block text-indigo-100 pd-3 text-left pr-4" htmlFor="inline-full-name">
                    {statType}:
                </label>
            </div>
            <div className="w-2/5 text-right">
                <button className="text-indigo-100 rounded px-1 h-7 border-solid border-2 bg-indigo-900/70 border-indigo-600 hover:bg-indigo-500/70" type="button" onClick={decNum}>-</button>
                <input type="text"
                    className={`text-center w-4 bg-transparent mx-2 ${getTextColor(num)}`}
                    value={num}
                    readOnly
                />
                <button className="text-indigo-100 rounded px-1 h-7 border-solid border-2 bg-indigo-900/70 border-indigo-600 hover:bg-indigo-500/70" type="button" onClick={incNum}>+</button>
            </div>
        </div>
    );
}
export default StatPicker;