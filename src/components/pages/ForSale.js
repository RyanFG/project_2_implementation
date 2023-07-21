import React from "react";
import FacetedSearch from "../FacetedSearch";
import boat from './Images/wood_boat.jpg';
import abstract from './Images/wooden_abstract.webp';
import bear from './Images/bear_carving.avif';
import nativity from './Images/nativity_carving.jpg';
import bouqet from './Images/bouqet_carving.avif';

function ForSale(){
    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksForSale =[
        {title:'Bear Eating Fish', typeWork:'Animal', desc:'An expertly crafted bear eating a freshly caught salmon.', size:'Small', price:'99$', image:bear},
        {title:'Abstract Cube', typeWork:'Abstract', desc:'An intriguing piece of art, a great display item.', size:'Large', price:'750$', image:abstract},
        {title:'Fishin Boat', typeWork:'Other', desc:'A jus dandy carving perfect to hang in boat shack.', size:'Medium', price:'249$', image:boat},
        {title:'Nativity Scene', typeWork:'Religous', desc:'A small scene depicting the classic scene from the bible.', size:'Small', price:'79$', image:nativity},
        {title:'Bouquet of Flowers', typeWork:'Nature', desc:'A pretty wall mounted carving that is great to display in any room.', size:'Medium', price:'179$', image:bouqet}
    ];
    
    return(

        <div className="leftPadding">
            <h1>Items For Sale</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksForSale}/>
        </div>

    );

}

export default ForSale;