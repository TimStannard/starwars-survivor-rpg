import { useState } from "react"
import MainTitle from "./components/menu/MainTitle";
import CharGeneration from "./components/menu/CharGeneration";

function App() {

  const [page, setPage] = useState("title");

  const selectPage = (input: string) => {
    setPage(input)
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex ">
      {page === "title" && <MainTitle changePage={selectPage} />}
      {page === "new-game" && <CharGeneration changePage={selectPage} />}
    </div>
  )
}


export default App
