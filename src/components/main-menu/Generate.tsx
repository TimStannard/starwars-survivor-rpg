// react
import { useContext, useEffect } from "react"
// types
import { charType } from '../../types/char';
import { mapType } from "../../types/map";
// // context
import { CharacterContext } from "../../context/characterData";

const Generate = () => {

    // Use useContext to access the character data and setter function
    const { setPage, setCharData, mapData, setMapData } = useContext(CharacterContext);


    useEffect(() => {
        if (!mapData) {
            setMapData({
                currentLocation: {
                    location: "Your Crashed Ship",
                    x: 50,
                    y: 50
                }
            })
            setPage("game-map")
        }
    }, []);

    return (
        <div className="rounded border-solid border-2 border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]">
            <div className="text-white h-[600px] flex p-20 justify-center content-center flex-wrap font-bold text-1xl tracking-[0.15em] text-center mt-[-1rem]">
                <p>LOADING...</p>
            </div>
        </div>

    )
}

export default Generate