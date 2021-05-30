import React, {CSSProperties, useEffect, useRef} from "react";
import  { useSelector, useDispatch } from "react-redux";
import { RootStore } from './store';
import {setSizeAction} from "./actions/actions";

const boardStyle: CSSProperties  = {
    position: 'relative',
    width: '100vw',
    height: '100vh'
};

export default () => {
    const board_ref = useRef(null);
    const { size : { width, height } } = useSelector((state: RootStore) => state )
    const resizeHandler = () => {
        console.log('sas')
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div style={boardStyle} ref={board_ref}>
            <canvas width={width} height={height}> </canvas>
        </div>
    )
}