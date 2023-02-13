import React, {useState} from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBox = {
            color : color,
            size : size
        }
        props.handleCreate(newBox);
        setColor("");
        setSize("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input type="text" onChange={(e)=>{setColor(e.target.value)}} name="color" value={color}/>
            <label htmlFor="size">Size</label>
            <input type="text" onChange={(e)=>{setSize(e.target.value)}} name="size" value={size}/>
            <input type="submit" value="Add Color"/>
        </form>
    )
}

export default BoxForm;