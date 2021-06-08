import React, {CSSProperties, useEffect, useRef} from "react";
import  { useSelector, useDispatch } from "react-redux";
import { RootStore } from './store';
import { setSizeAction } from "./actions/actions";

const boardStyle: CSSProperties  = {
    position: 'relative',
    width: '100vw',
    overflow: 'hidden',
    height: '100vh'
};

export default () => {
    const board_ref = useRef<HTMLDivElement>(null);
    const canvas_ref = useRef<HTMLCanvasElement>(null);
    const { size : { width, height } } = useSelector((state: RootStore) => state )
    const dispatch = useDispatch();

    const resizeHandler = () => {
        const el = board_ref.current;
        el && dispatch(setSizeAction({ width: el.offsetWidth, height: el.offsetHeight }));
    };

    const setContext = () => {
        // const el = canvas_ref.current;
        // el && dispatch(setContextAction({ context: el.getContext('2d')}));
    }

    useEffect(() => {
        resizeHandler();
        setContext();
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);


    return (
        <div style={boardStyle} ref={board_ref}>
            <canvas width={width} height={height} ref={canvas_ref}> </canvas>
        </div>
    )
}