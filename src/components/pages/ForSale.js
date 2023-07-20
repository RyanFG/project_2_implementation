import React from "react";
import FacetedSearch from "../FacetedSearch";


function ForSale(){
    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksForSale =[
        {title:'Bear', typeWork:'Animal', desc:'long description', size:'Small', price:'99$', image:''},
        {title:'Abstract Work', typeWork:'Abstract', desc:'description', size:'Large', price:'750$', image:''},
        {title:'Boat', typeWork:'Other', desc:'boat desc', size:'Medium', price:'249$', image:''}
    ];
    
    return(

        <div className="leftPadding">
            <h1>Items For Sale</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksForSale}/>
        </div>

    );

}

export default ForSale;