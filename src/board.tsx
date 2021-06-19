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
    const board_ref = useRef<HTMLDivElement>(null);
    const canvas_ref = useRef<HTMLCanvasElement>(null);
    const { render, canvasHeight, canvasWidth, setSize } = board;

    const resizeHandler = () => {
        const el = board_ref.current;
        el && setSize({ width: el.offsetWidth, height: el.offsetHeight });
    };

    const setContext = () => {
        const canvasElement = canvas_ref.current;
        if (canvasElement) {
            board.setContext(canvasElement);
        }
    }

    useEffect(() => {
        resizeHandler();
        setContext();

        render();

        window.addEventListener('resize', resizeHandler)


        return () => window.removeEventListener('resize', resizeHandler);
    }, []);


    return (
        <div style={boardStyle} ref={board_ref}>
            <Panel />
            <canvas width={canvasWidth} height={canvasHeight} ref={canvas_ref}> </canvas>
        </div>
    )
}