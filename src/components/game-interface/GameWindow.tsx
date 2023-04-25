// react
import { useContext } from "react"
// types
import { charType } from '../../types/char';
// // context
import { CharacterContext } from "../../context/characterData";


export const GameWindow = () => {

    // Use useContext to access the character data and setter function
    const { charData, setCharData } = useContext(CharacterContext);

    const updateCharData = (newCharData: charType) => {
        // Call the setter function to update the character data
        setCharData(newCharData);
    };

    return (
        <div className="rounded border-solid border-2 border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]">
            <div className="pt-40">
                <div className="text-yellow-300 font-bold text-1xl tracking-[0.15em] text-center mt-[-1rem]">
                    <p className="mb-5">It is 3962 BBY, two years since the Mandolorian Wars.</p>
                    <p>You wake up, the desert wind blowing around you.</p>
                </div>
            </div>
        </div>

    )
}
