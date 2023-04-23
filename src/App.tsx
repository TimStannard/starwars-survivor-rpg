function App() {

  return (
    <div id="" className="w-screen h-screen bg-slate-950 flex ">

      <div className="border-solid border-2 border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[center_top_1rem] bg-cover h-2/3 w-1/3">
        <div className="pt-18">
          <img src="/src/assets/sw-logo.png" className="w-3/4 m-auto" alt="star wars logo" />
          <h1 className="text-zinc-50 text-2xl tracking-widest text-center mt-[-1rem]">SURVIVOR</h1>
        </div>
        <div>
          <button>New Game</button>
          <button>Load Game</button>
          <button>Extras</button>
        </div>
      </div>
    </div>
  )
}


export default App
