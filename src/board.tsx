import React, {CSSProperties, useEffect, useRef} from "react";
import BoardInteraction from './boardInteraction';
import Panel from './panel'

const board = new BoardInteraction();
const boardStyle: CSSProperties  = {
    position: 'relative',
    width: '100vw',
    overflow: 'hidden',
    height: '100vh'
};

export default () => {
    const canvas_ref = useRef<HTMLCanvasElement>(null);

    const { render, setCanvasSize, setContext } = board

    useEffect(() => {
        setContext(canvas_ref.current);
        setCanvasSize();
        render();

        window.addEventListener('resize', setCanvasSize)

        return () => window.removeEventListener('resize', setCanvasSize);
    }, []);


    return (
        <div style={boardStyle}>
            <Panel />
            <canvas ref={canvas_ref}> </canvas>
        </div>
    )
}