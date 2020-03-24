import React,{useState, useEffect} from "react";
import  {Link}  from "react-router-dom";

const Dashboard = () => {











    return(
        <div>
            <header>
                <h1>Bad Rhyme!</h1>
            </header>
            <main>
                <div>
                    <p>At first I wished to create a beautiful rhyming website to help people write or just find better rhymes.</p>
                    <p>Then I realized the rhyming API I found was actually pretty terrible, so I decided to roll with it! </p>
                    <p>I hope you find laughter from these terrible rhymes as I did. Included is also a similiar word search that is completely hit or miss 😊</p>
                </div>
                <Link to = "/rhymes">Enter!</Link>
            </main>
        </div>
    )
}

export default Dashboard