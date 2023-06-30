import React from "react";
import FacetedSearch from "../FacetedSearch";


function ForSale(){
    
    const typeWork=['Animal','Nature','Religous','Abstract','Other'];
    const size = ['Small','Medium','Large'];
    const price =['less than 99$', '100$ to 249$', '250$ to 749$','750$ to 2499$', '2500$ or more'];

    const worksForSale =[
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''},
        {title:'', typeWork:'', desc:'', size:'', price:'', image:''}

    ];
    
    return(

        <div>
            <h1>Items For Sale</h1>
            <FacetedSearch typeWork={typeWork} size={size} price={price} works={worksForSale}/>
        </div>

    );

}

export default ForSale;