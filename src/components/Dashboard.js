import React,{useState, useEffect} from "react";
import  {Link}  from "react-router-dom";
import "./dashboard.css";


const Dashboard = () => {











    return(
        <div className="dash-parent">
            <header>
                <h1 className="title">Do you want to rhyme??</h1>
            </header>
            <main className = "main">
                <div className="greeting">
                    <p>You might have come to the right place!</p>
                    <p>Using an extremely hit or miss rhyming api you can now possibly get just the rhyme you were looking for. </p>
                    <p>Included is also a similiar word search that is also completely hit or miss 😊</p>
                </div>
                <div className="button">
                    <Link to = "/rhymes" className="link">Enter!</Link>
                </div>
            </main>
        </div>
    )
}

export default Dashboard