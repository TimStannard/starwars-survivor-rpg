// react
import { useContext } from "react"
// components
import { NewCharForm } from './char-generation/NewCharForm';
// // context
import { CharacterContext } from "../../context/characterData";

const NewGame = () => {

    const { setPage } = useContext(CharacterContext);

    return (
        <div className="border-solid border-2 rounded border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[right_-2rem_top] bg-cover h-[690px] w-[400px]">
            <div className="pt-18">
                <img src="/src/assets/sw-logo.png" className="w-3/4 m-auto mb-6" alt="star wars logo" />
                <h1 className="text-indigo-100 text-1xl tracking-[0.25em] text-center mt-[-1rem]">NEW CHARACTER</h1>
            </div>
            <div className="pt-3">
                <div className="px-3 rounded py-5 mb-2 w-4/5 text-indigo-100 m-auto block border-solid border-2 bg-indigo-900/70 border-indigo-600 text-center">
                    <NewCharForm />
                </div>
            </div>
            <div className="pt-3">
                <button className="p-1 w-[30%] rounded text-indigo-100 m-auto block border-solid border-2 border-indigo-600 hover:bg-indigo-500/70"
                    onClick={() => {
                        setPage("title")
                    }}
                ><i className="bi bi-arrow-left"></i> Go back</button>
            </div>
        </div>
    )

}

export default NewGame