import { createContext } from "react";
import { charType } from "../types/char";
import { mapType } from "../types/map";

// Context to store the character data and setter function
export const CharacterContext = createContext<{
    charData: charType | null,
    mapData: mapType | null,
    setMapData: React.Dispatch<React.SetStateAction<mapType | null>>
    setCharData: React.Dispatch<React.SetStateAction<charType | null>>
    setPage: React.Dispatch<React.SetStateAction<string>>
}>({
    charData: null,
    mapData: null,
    setMapData: () => { },
    setCharData: () => { },
    setPage: () => { },
});