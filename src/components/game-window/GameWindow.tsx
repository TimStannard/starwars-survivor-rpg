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
    // console.log({ charData });

    return (
        <div>Game</div>
    )
}
