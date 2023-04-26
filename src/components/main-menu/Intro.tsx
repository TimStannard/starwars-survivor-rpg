import { useContext, useState } from "react";
import { CharacterContext } from "../../context/characterData";

const Generate = () => {
    const { setPage } = useContext(CharacterContext);
    const [textNode, updateTextNode] = useState(0);

    let textContent = null;

    if (textNode === 0) {
        textContent = (
            <>
                <p className="mb-5 block">It is 3962 BBY, two years since the brutal Mandolorian Wars.</p>
                <p className="mb-5 block">You have been forced to crash-land on an alien planet.</p>
            </>
        );
    } else if (textNode === 1) {
        textContent = <p className="mb-5 block">Your head is pounding.</p>;
    } else if (textNode === 2) setPage("generate")

    return (
        <div className="rounded border-solid border-2 border-gray-700 m-auto bg-[url('/src/assets/main-title-image.jpeg')] bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]">
            <div
                className="text-yellow-300 cursor-pointer h-[600px] flex p-20 justify-center content-center flex-wrap font-bold text-1xl tracking-[0.15em] text-center mt-[-1rem]"
                onClick={() => updateTextNode(textNode + 1)}
            >
                {textContent}
            </div>
        </div>
    );
};

export default Generate;
