import React from "react";
import "./Input.css"

function Input(props){
    return <div className="input-cmp">
        <form onSubmit={props.submit}>
            <label>Skriv inn det du ønsker å oversette {props.direction} røverspråk</label>
            <textarea cols="60" rows="8"></textarea>
            <button type="submit">Oversett</button>
        </form>
    </div>;
}

export default Input;