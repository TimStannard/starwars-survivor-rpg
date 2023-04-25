// react
import { useState } from "react"
// types
import { charType } from "./types/char";
// context
import { CharacterContext } from "./context/characterData";
// components
import MainTitle from "./components/main-menu/MainTitle";
import CharGeneration from "./components/main-menu/CharGeneration";
import { GameWindow } from "./components/game-window/GameWindow";
// css
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const [page, setPage] = useState<string>("title");
  const [charData, setCharData] = useState<charType | null>(null)

  const selectPage = (input: string) => {
    setPage(input)
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex ">
      {/* Provide the character data and setter function to the context */}
      <CharacterContext.Provider value={{ charData, setCharData }}>
        {page === "title" && <MainTitle changePage={selectPage} />}
        {page === "new-game" && (
          <CharGeneration
            changePage={selectPage}
          />
        )}
        {page === "generate" && charData !== null && (
          <GameWindow />
        )}
      </CharacterContext.Provider>
    </div>
  )
}

export default App
