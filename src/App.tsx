// react
import { useState } from "react"
// types
import { charType } from "./types/char";
import { mapType } from "./types/map";
// context
import { CharacterContext } from "./context/characterData";
// components
import Landing from "./components/main-menu/Landing";
import NewGame from "./components/main-menu/NewGame";
import Intro from "./components/main-menu/Intro";
import Generate from "./components/main-menu/Generate";
// main game component
import GameMap from "./components/game-map/GameMap";
// css
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const [page, setPage] = useState<string>("landing");
  const [charData, setCharData] = useState<charType | null>(null)
  const [mapData, setMapData] = useState<mapType | null>(null)

  return (
    <div className="w-screen h-screen bg-slate-950 flex ">
      {/* Provide the character data and setter function to the context */}
      <CharacterContext.Provider value={{ charData, mapData, setMapData, setCharData, setPage }}>
        {page === "landing" && <Landing />}
        {page === "new-game" && <NewGame />}
        {page === "intro" && charData !== null && <Intro />}
        {page === "generate" && <Generate />}
        {page === "game-map" && <GameMap />}
      </CharacterContext.Provider>
    </div>
  )
}

export default App
