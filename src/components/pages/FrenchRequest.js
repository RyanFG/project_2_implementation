import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import tall_art from './Images/Tall_Abstract_Carving.jpg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CreateRequest(){

    return(  

        <Row>
            <Navbar color=" #3a1b01" bg="darkBrown" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" fixed="top">
                <Container>
                <Navbar.Brand href="/">Whittle Creations</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/ForSale">À Vendre</Nav.Link>
                    <Nav.Link href="/PrevWorks">Travaux Antérieurs</Nav.Link>
                    <Nav.Link href="/CreateRequest">Commandez Maintenant</Nav.Link>
                    <Nav.Link href="/Tips">Conseils De Sculpture</Nav.Link>
                    <Nav.Link href="/Month">Statistiques Mensuelles</Nav.Link>
                    <Nav.Link href="/About">À Propos De Nous</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Col xs={8}>
                <div className="newBorder2">
                    <h1>Votre Commande</h1>
                    <h2>Vos Informations</h2>
                    <div className="upRight">
                        <Button href="/CreateRequest" variant="secondary" type="submit">
                                To English
                        </Button>
                    </div>
                    <Form>
                        <Row>
                            <Col xs={3}>
                                <Form.Control placeholder="Prénom" />
                            </Col>
                            <Col xs={4}>
                                <Form.Control placeholder="Nom De Famille" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="E-Mail" />
                            </Col>
                        </Row>

                        <h2 className="down2">Votre Demande</h2>
                        <Form.Control placeholder="Nom De Sculpture"/>

                        <Row className="down3">
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Catégorie De Sculpture</option>
                                    <option value="1">Animal</option>
                                    <option value="2">Abstrait</option>
                                    <option value="3">Nature</option>
                                    <option value="4">Religieux</option>
                                    <option value="5">Autre</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>Taille De Sculpture</option>
                                    <option value="1">Petit</option>
                                    <option value="2">Moyen</option>
                                    <option value="3">Grand</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <h2 className="down2">Remarques</h2>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Veuillez commenter tout élément spécifique (par exemple, je veux que ce soit un ours, qu'il ait l'air de courir, etc.)"/>
                            <Form.Text className="text-muted">
                                Vous recevez un e-mail après réception de la demande de
                                négocier un prix et vérifier les détails.
                            </Form.Text>
                        </Form.Group>
                        <Button href="/Success" variant="success" type="submit">
                            Soumettre La Commande
                        </Button>

                    </Form>
                </div>
            </Col>
            <Col xs={4} className="down4">
                <img src={tall_art} alt="Tall Abstract Carving" width='45%'/>
            </Col>
        </Row>

    );

}

export default CreateRequest;