import React from "react";

const BoxDisplay = (props) => {
    const mainStyle = {
        margin: '20px 10%',
        display: 'flex',
        align: 'center',
        justify: 'space-evenly',
        flex: 'wrap'
    }

    return (
        <main style={mainStyle}>
            {
            props.boxes?.map((box, i) => {
                const dimensions = box.size + "px";
                const boxStyle = {
                    width: dimensions,
                    height: dimensions,
                    margin: '10px',
                    background: box.color
                }
                return (
                    <div style={boxStyle} key={i}></div>
                )
            })
            }
        </main>
    );
}

export default BoxDisplay;