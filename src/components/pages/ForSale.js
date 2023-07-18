import React from "react";
import FacetedSearch from "../FacetedSearch";


function ForSale(){
    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksForSale =[
        {key:1, title:'Bear', typeWork:'Animal', desc:'long description', size:'Small', price:'less than 99$', image:''},
        {key:2, title:'Abstract Work', typeWork:'Abstract', desc:'description', size:'Large', price:'750$ to 2499$', image:''},
        {key:3, title:'Boat', typeWork:'Other', desc:'boat desc', size:'Medium', price:'100$ to 249$', image:''}
    ];
    
    return(

        <div>
            <h1>Items For Sale</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksForSale}/>
        </div>

    );

}

export default ForSale;