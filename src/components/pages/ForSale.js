import React from "react";
import FacetedSearch from "../FacetedSearch";
import boat from './Images/wood_boat.jpg';
import abstract from './Images/wooden_abstract.webp';
import bear from './Images/bear_carving.avif';

function ForSale(){
    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksForSale =[
        {title:'Bear Eating Fish', typeWork:'Animal', desc:'An expertly crafted bear eating a freshly caught salmon.', size:'Small', price:'99$', image:bear},
        {title:'Abstract Cube', typeWork:'Abstract', desc:'An intriguing piece of art, a great display item.', size:'Large', price:'750$', image:abstract},
        {title:'Fishin Boat', typeWork:'Other', desc:'A jus dandy carving perfect to hang in boat shack ', size:'Medium', price:'249$', image:boat}
    ];
    
    return(

        <div className="leftPadding">
            <h1>Items For Sale</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksForSale}/>
        </div>

    );

}

export default ForSale;