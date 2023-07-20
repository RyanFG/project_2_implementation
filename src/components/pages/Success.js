import React from "react";
import check from './Images/checkmark.webp';

function Home(){

    return(

        <div className="down text-center">
            <h1>Request Has Been Succesfully Recieved</h1>
            <img src={check} alt="Green Checkmark" width='35%'/>
        </div>

    );

}

export default Home;