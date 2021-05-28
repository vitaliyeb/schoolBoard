import React, {CSSProperties, useEffect, useRef} from "react";
import  { useSelector, useDispatch } from "react-redux";
import {increment} from "./actions/actions";

const boardStyle: CSSProperties  = {
    position: 'relative',
    width: '100vw',
    height: '100vh'
};

export default () => {
    const board_ref = useRef(null);
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch();

    // const [width, set_width] = useState(0);
    // const [height, set_height] = useState(0);

    const setSizeCanvas = () => {
        // set_width(board_ref.clientWidth);
        // set_height(board_ref.clientHeight);
    }

    useEffect(() => {
        setSizeCanvas();
        window.addEventListener('resize', setSizeCanvas)
        return () => window.removeEventListener('resize', setSizeCanvas );
    }, []);
    console.log(counter)
    return (
        <div style={boardStyle} ref={board_ref}>
            <p>{ counter }</p>
            <button onClick={() => dispatch(increment(21))}>+</button>
            {/*<canvas width={width} height={height}> </canvas>*/}
        </div>
    )
}