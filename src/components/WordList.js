import React from "react";
import './wordlist.css'


const WordList = (props) =>{
    
    return(
    <div className="singleWord"key = {props.unique}>
        <p>{props.words}</p>
    </div>
    )
}


export default WordList