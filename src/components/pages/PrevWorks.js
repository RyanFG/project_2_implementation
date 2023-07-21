import React from "react";
import FacetedSearch from "../FacetedSearch";
import frog from './Images/frog_carving.jpg';
import jesus from './Images/jesus_carving.jpg';
import ironman from './Images/ironman_carving.jpg';
import flower from './Images/flower_carving.jpg';
import curvy from './Images/abstract_curvy.jpg';


function PrevWorks(){

    
    const typeWorks=['Animal','Nature','Religous','Abstract','Other'];

    const worksSold =[
        {title:'Frog Carving', typeWork:'Animal', desc:'A expertly carved frog sitting on top of a tree stump.', size:'Medium', price:'359$', image:frog, forPurchase:"Request Remake"},
        {title:'Jesus On The Cross', typeWork:'Religous', desc:'An emotional piece showing the last days of the christian religious saviour.', size:'Medium', price:'649$', image:jesus, forPurchase:"Request Remake"},
        {title:'Iron Man', typeWork:'Other', desc:'A carving of the iconic Marvel superhero.', size:'Medium', price:'149$', image:ironman, forPurchase:"Request Remake"},
        {title:'Flower', typeWork:'Nature', desc:'A perfect small display item to use on special occasions.', size:'Small', price:'49$', image:flower, forPurchase:"Request Remake"},
        {title:'Curvy Abstract', typeWork:'Abstract', desc:'An intersting piece that is masterfully carved, and is a perfect center piece.', size:'Medium', price:'249$', image:curvy, forPurchase:"Request Remake"},
    ];
    
    return(

        <div className="leftPadding">
            <h1>Previous Works</h1>
            <FacetedSearch typeWorks={typeWorks} works={worksSold}/>
        </div>

    );

}

export default PrevWorks;