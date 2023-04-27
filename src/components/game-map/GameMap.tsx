// react
import { useContext, useEffect, useRef } from "react"
// types
import { charType } from '../../types/char';
import { mapType } from "../../types/map";
// // context
import { CharacterContext } from "../../context/characterData";

const GameMap = () => {

    // Use useContext to access the character data and setter function
    // const { setPage, setCharData, mapData, setMapData } = useContext(CharacterContext);

    // get canvas reference
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        const image = new Image();
        image.src = "/src/assets/main-title-image.jpeg";
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }
        draw(context, canvas);
    }, []);

    return (
        <div className="rounded border-solid border-2 border-gray-700 m-auto bg-no-repeat bg-[right_-2rem_top] bg-cover h-[600px] w-[400px]">
            <canvas ref={canvasRef} width={1200} height={1200} />
        </div>

    )
}

export default GameMap