import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function AboutUs(){

    return(
        <Form>
            <Row>
                <Col>
                    <div className="newBorder">
                        <h1>
                            About Us
                        </h1>
                        <h6>
                        Hello all, my name is Willie Whittle
                        owner of Whittle Creations and I want 
                        to welcome you our site created for 
                        selling high quality wooden works
                        of art to those who are interested in
                        buying. This has been my passion for
                        for a long time and I hope you enjoy 
                        the carvings we make. You can view
                        previous works, check whats for sale
                        or create a request for a custom work.
                        On this page you can also read about 
                        some  of techniques that we have 
                        used while making these works of art.
                        </h6>
                    </div>
                </Col>
                <Col>
                    <div className="down">
                        <h1>
                            Send Us Any Questions
                        </h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Send
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="newBorder">

                </div>
            </Row>
        </Form>

    );

}

export default AboutUs;