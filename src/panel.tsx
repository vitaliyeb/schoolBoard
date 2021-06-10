import React, {CSSProperties} from "react";

const panelWrapperStyle:CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    boxShadow: '0px 0px 6px -2px #00000073',
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '3px 5px'

}

const Panel = () => {
    return (
        <div style={panelWrapperStyle}>
            <div></div>
        </div>
    )
};

export default Panel;