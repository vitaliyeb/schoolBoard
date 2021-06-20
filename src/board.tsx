import React, {CSSProperties, useEffect, useRef, useState} from "react";
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
    const [size, setSize] = useState({width: 0, height: 0})

    const { render } = board;

    const resizeHandler = () => {
        const el = board_ref.current;
        if (el) {
            const size = {
                width: el.offsetWidth,
                height: el.offsetHeight
            }
            setSize(size);
            board.setSize(size);
        }
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
            <canvas width={size.width} height={size.height} ref={canvas_ref}> </canvas>
        </div>
    )
}