import React from "react";
import FacetedSearch from "../FacetedSearch";


function PrevWorks(){

    
    const typeWork=['Animal','Nature','Religous','Abstract','Other'];
    const size = ['Small','Medium','Large'];
    const price =['less than 99$', '100$ to 249$', '250$ to 749$','750$ to 2499$', '2500$ or more'];

    const worksSold =[
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''}

    ];
    
    return(

        <div>
            <h1>Previous Works</h1>
            <FacetedSearch typeWork={typeWork} size={size} price={price} works={worksSold}/>
        </div>

    );

}

export default PrevWorks;