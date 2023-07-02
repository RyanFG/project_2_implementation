import React from "react";
import FacetedSearch from "../FacetedSearch";


function PrevWorks(){

    
    const typeWork=['Animal','Nature','Religous','Abstract','Other'];
    const size = ['Small','Medium','Large'];
    const price =['less than 99$', '100$ to 249$', '250$ to 749$','750$ to 2499$', '2500$ or more'];

    const worksSold =[
        {title:'Bear', typeWork:'Animal', desc:'long description', size:'Small', price:'less than 99$', image:''},
        {title:'Abstract Work', typeWork:'Abstract', desc:'description', size:'Large', price:'750$ to 2499$', image:''},
        {title:'Boat', typeWork:'Other', desc:'boat desc', size:'Medium', price:'100$ to 249$', image:''}
    ];
    
    return(

        <div>
            <h1>Previous Works</h1>
            <FacetedSearch typeWork={typeWork} size={size} price={price} works={worksSold}/>
        </div>

    );

}

export default PrevWorks;