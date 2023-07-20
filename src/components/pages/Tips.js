import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import carving1 from './Images/carving1.jpg';
import carving2 from './Images/carving2.jpg';

function Tips(){

    return(

        <Row>
            <Col xs={7}>
                <div className="newBorder">
                    <h1>
                        Tips and Tricks for Carving Wood
                    </h1>
                    <h6>Here we are going to give you some beginner wood carving tips</h6>
                    <p>{"- Know where the sharp edge is. Not only is this important for safety, "}
                    {"but it will also allow you to be more productive with your carvings."}</p>
                    <p>{"- Be careful of how much wood you take off. Even if you want to you will not be able to put the wood "}
                    {"back on once it has been taken off. An error like this could derail your entire piece."}</p>
                    <p>{"- Wood burning is a very useful tool that can be used to add texture to a work. "}
                    {"Be careful working with tools like this and make sure to handle them properly."}</p>
                    <p>{"- Learn about the different types of tools that can be used and understand the purpose each tool serves."}</p>
                    <p>{"- Start with simple projects. While you may want to start with an extremely intricate work this is "}
                    {"extremely difficult and takes years of practice. Start small and work your way up to more complicated "}
                    {"pieces after you have practiced on some easier pieces."}</p>
                </div>
            </Col>
            <Col>
                <div className="down">
                    <div className="text-center down2">
                        <img src={carving1} alt="Wood Carving" width='60%'/>
                    </div>
                    <div className="text-center down2">
                        <img src={carving2} alt="Wood Carving Tools" width='60%'/>
                    </div>
                </div>
            </Col>
        </Row>

    );

}

export default Tips;