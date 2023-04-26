// react
import { useState } from "react"
// types
import { charType } from "./types/char";
// context
import { CharacterContext } from "./context/characterData";
// components
import Landing from "./components/main-menu/Landing";
import NewGame from "./components/main-menu/NewGame";
import Intro from "./components/main-menu/Intro";
import Generate from "./components/main-menu/Generate";
// css
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const [page, setPage] = useState<string>("title");
  const [charData, setCharData] = useState<charType | null>(null)

  return (
    <div className="w-screen h-screen bg-slate-950 flex ">
      {/* Provide the character data and setter function to the context */}
      <CharacterContext.Provider value={{ charData, setCharData, setPage }}>
        {page === "title" && <Landing />}
        {page === "new-game" && <NewGame />}
        {page === "intro" && charData !== null && <Intro />}
        {page === "generate" && <Generate />}
      </CharacterContext.Provider>
    </div>
  )
}

export default App
