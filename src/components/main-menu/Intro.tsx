import { useContext, useState, useEffect } from "react";
import { CharacterContext } from "../../context/characterData";

const Generate = () => {
    const { setPage } = useContext(CharacterContext);
    const [textNode, updateTextNode] = useState(0);

    let textContent = null;

    // change page once element has rendered, once user has clicked through to the end
    useEffect(() => {
        if (textNode === 2) {
            setPage("generate");
        }
    }, [textNode, setPage]);

    // different text nodes to step through via click
    if (textNode === 0) {
        textContent = (
            <>
                <p className="mb-5 block z-10">It is 3962 BBY, two years since the brutal Mandolorian Wars.</p>
                <p className="mb-5 block z-10">You have been forced to crash-land on an alien planet.</p>
            </>
        );
    } else if (textNode === 1) {
        textContent =
            <>
                <p className="mb-5 block z-10">The wind blows around you.</p>
                <p className="mb-5 block z-10"> Your head is pounding...</p>
            </>
    }

    return (
        <div className={`rounded border-solid border-2 border-gray-700 m-auto 
    ${textNode === 0 ? "bg-[url('/src/assets/intro-crash-img.jpeg')]" : "bg-[url('/src/assets/intro-cloaked-man.jpeg')]"}
    bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]`}
        >
            <div
                className="text-yellow-300 cursor-pointer h-[600px] flex p-20 justify-center content-center flex-wrap font-bold text-1xl tracking-[0.15em] text-center mt-[-1rem]"
                onClick={() => updateTextNode(textNode + 1)}
            >
                {textContent}
            </div>

            <div className="h-[235px] w-[260px] bg-black/50 absolute top-[305px] left-[280px] z-0 blur-lg rounded-full"></div>
        </div>
    );
};

export default Generate;
