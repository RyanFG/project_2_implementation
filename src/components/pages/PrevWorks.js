import React from "react";
import FacetedSearch from "../FacetedSearch";


function PrevWorks(){

    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksSold =[
        {title:'Bear', typeWork:'Animal', desc:'long description', size:'Small', price:'79$', image:'', forPurchase:"Request Remake"},
        {title:'Abstract Work', typeWork:'Abstract', desc:'description', size:'Large', price:'899$', image:'', forPurchase:"Request Remake"},
        {title:'Boat', typeWork:'Other', desc:'boat desc', size:'Medium', price:'149$', image:'', forPurchase:"Request Remake"}
    ];
    
    return(

        <div className="leftPadding">
            <h1>Previous Works</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksSold}/>
        </div>

    );

}

export default PrevWorks;