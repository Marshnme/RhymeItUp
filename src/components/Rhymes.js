import React,{useState, useEffect} from "react";
import axios from "axios";
import WordList from "./WordList"
const Rhymes = () => {
    const [rhyme,setRhyme] = useState([])
    const [list,setList] = useState([])

    const handleChanges = e => {
        setRhyme({[e.target.name]: e.target.value});
        console.log(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .get(`https://wordsapiv1.p.rapidapi.com/words/${rhyme.word}/rhymes`,{
            headers:{"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "3e6f97ba46mshd0e970af8b190bcp1daa64jsn2a48b3562207"}
        })
        .then(res =>{
            setList(res.data.rhymes.all)
            console.log("get res",res)
        })
        
        
        
    }
    console.log(rhyme)
    return(
        <>
        <form onSubmit={handleSubmit} className = "register-form">
            <div>
                <label>Find a rhyme for: </label>
                <input onChange={handleChanges} value={rhyme.word} type="text" name="word" required></input>
            </div>
            <div>
                <button>Submit!</button>
            </div>
        </form>
       
        <div>
            {list.map( i =>{
                return(
                    <WordList words = {i}/>
                )
            })}
        </div> </>
    )
}

export default Rhymes