import { useState } from "react"

// components
import MainTitle from "./components/main-menu/MainTitle";
import CharGeneration from "./components/main-menu/CharGeneration";
import { GameWindow } from "./components/game-window/GameWindow";
// types
import { charType } from "./types/char";
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
      {page === "title" && <MainTitle changePage={selectPage} />}
      {page === "new-game" && <CharGeneration changePage={selectPage} setCharacterData={setCharData} />}
      {page === "generate" && charData !== null && <GameWindow changePage={selectPage} setCharacterData={setCharData} characterData={charData} />}
    </div>
  )
}

export default App
