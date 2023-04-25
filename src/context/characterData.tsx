import { createContext } from "react";
import { charType } from "../types/char";

// Context to store the character data and setter function
export const CharacterContext = createContext<{
    charData: charType | null,
    setCharData: React.Dispatch<React.SetStateAction<charType | null>>
}>({
    charData: null,
    setCharData: () => { },
});