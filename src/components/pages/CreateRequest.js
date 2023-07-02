import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function CreateRequest(){

    return(

        <Row>
            <Col xs={8}>
                <div className="newBorder2">
                    <h1>Create a Request</h1>
                    <h2>Your Information</h2>
                    <Form>
                        <Row>
                            <Col xs={3}>
                                <Form.Control placeholder="First Name" />
                            </Col>
                            <Col xs={4}>
                                <Form.Control placeholder="Last Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                        </Row>

                        <h2 className="down2">Your Request</h2>
                        <Form.Control placeholder="Name of Work"/>

                        <Row className="down3">
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Category of Work</option>
                                    <option value="1">Animal</option>
                                    <option value="2">Abstract</option>
                                    <option value="3">Nature</option>
                                    <option value="4">Religous</option>
                                    <option value="5">Other</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Size of Work</option>
                                    <option value="1">Small</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Large</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <h2 className="down2">Notes</h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Please comment anything specific (ex. I want it to be a bear, have it look like it running, etc.)"/>
                            <Form.Text className="text-muted">
                                I will email with you after receiving the request the request to 
                                negotiate a price, and verify specifics about your request.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit Request
                        </Button>

                    </Form>
                </div>
            </Col>
            <Col>

            </Col>
        </Row>

    );

}

export default CreateRequest;