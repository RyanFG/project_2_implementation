import React from "react";
import FacetedSearch from "../FacetedSearch";
import frog from './Images/frog_carving.jpg';
import jesus from './Images/jesus_carving.jpg';

function PrevWorks(){

    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksSold =[
        {title:'Frog Carving', typeWork:'Animal', desc:'A expertly carved frog sitting on top of a tree stump.', size:'Medium', price:'359$', image:frog, forPurchase:"Request Remake"},
        {title:'Jesus On Cross', typeWork:'Religous', desc:'An emotional piece showing the last days of the christian religious saviour.', size:'Medium', price:'649$', image:jesus, forPurchase:"Request Remake"},
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