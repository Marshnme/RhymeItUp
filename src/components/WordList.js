import React from "react";



const WordList = (props) =>{
    
    return(
    <div key = {props.unique}>
        <p>{props.words}</p>
    </div>
    )
}


export default WordList