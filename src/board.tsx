import React, {CSSProperties, useEffect, useRef} from "react";
import  { useSelector, useDispatch } from "react-redux";
import {setSizeAction} from "./actions/actions";

const boardStyle: CSSProperties  = {
    position: 'relative',
    width: '100vw',
    height: '100vh'
};

export default () => {
    const board_ref = useRef(null);
    const size = useSelector(state => state.size)
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
    console.log(size)
    return (
        <div style={boardStyle} ref={board_ref}>
            <p>{size.width}</p>
            <button onClick={() => dispatch(setSizeAction({ width: 100, height: 100 }))}>+</button>
            {/*<canvas width={width} height={height}> </canvas>*/}
        </div>
    )
}