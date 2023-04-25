type Props = {
    changePage: (input: string) => void
};


const Landing = ({ changePage }: Props) => {
    return (
        <div className="rounded border-solid border-2 border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]">
            <div className="pt-18">
                <img src="/src/assets/sw-logo.png" className="w-3/4 m-auto" alt="star wars logo" />
                <h1 className="text-yellow-300 font-bold text-1xl tracking-[0.75em] text-center mt-[-1rem]">WASTELANDER</h1>
            </div>
            <div className="pt-40">
                <button className="rounded p-3 mb-2 w-1/2 text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/70 border-indigo-600 hover:bg-indigo-500/70"
                    onClick={() => {
                        changePage("new-game")
                    }}
                >New Game</button>
                <button className="rounded p-3 mb-2 w-1/2 text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/70 border-indigo-600 hover:bg-indigo-500/70">Load Game</button>
                <button className="rounded p-3 mb-2 w-1/2 text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/70 border-indigo-600 hover:bg-indigo-500/70">Extras</button>
            </div>
        </div>
    )
}

export default Landing