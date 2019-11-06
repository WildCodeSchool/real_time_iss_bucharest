import React, { Component } from 'react';
import './newsletter.css'

import { Container, Form, Row, Col, Button, Image } from 'react-bootstrap';

class Newsletter extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Container className="bg-dark text-light form-container">
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>

            <Col xs={6} md={8}>
                <Form className="actualForm">
                    <Form.Group as={Row} controlId="formHorizontalFullName">
                        <Form.Label column sm={2}>
                            Full Name
    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Full name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Email
    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col sm={{ span: 5, offset: 1}}>
                            <Form.Check label="Remember me" />
                        </Col>
                        <Col sm={{ span: 5, offset: 1}}>
                            <Form.Check label="I want to win a trip to ISS" />
                        </Col>
                    </Form.Group>

                    {/* <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit" variant="light">Sign in</Button>
                        </Col>
                    </Form.Group> */}
                </Form>
                </Col>

                </Row>
            </Container>
        )
    }
}

export default Newsletter;