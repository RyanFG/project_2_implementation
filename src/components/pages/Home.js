import React from "react";
import Carousel from '../Carousel';
import Button from 'react-bootstrap/Button';


function Home(){

    return(

        <div>
            <Carousel/>
            <div href="/CreateRequest" className="down3 text-center">
                <Button href="/CreateRequest" variant="success" type="submit" size="lg">
                    Click Here To Create An Order
                </Button>
            </div>
        </div>

    );

}

export default Home;