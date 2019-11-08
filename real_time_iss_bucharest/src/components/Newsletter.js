import React, { Component } from 'react';
import '../App.css'

import CustomBtn from './Button'

import { Container, Form, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Newsletter extends Component {

handleCheck() {
    console.log('checked')
    this.props.callBack(true)
}

render() {
    return (
    <Container className="bg-dark text-light form-container" fluid>
        <Row className='align-items-center rowThatWorks'>
            <Col xs={6} md={{ span: 6, offset:0 }}>
                <Image className='form-img img-fluid' src={require('../img/0701890_orig.jpg')} />
            </Col>

            <Col xs={6} md={{ span: 5, offset: 0 }}>
                <h1 className="annoying-title display-5">Some title</h1>
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
                        <Col sm={{ span: 4, offset: 2}}>
                            <Form.Check label="Remember me" />
                        </Col>
                        <Col sm={{ span: 4, offset: 2}}>
                            <Form.Check label="I want to win a trip to ISS" onClick={this.handleCheck.bind(this)} />
                        </Col>
                    </Form.Group>
                    <CustomBtn
                    text='Sign up'
                    bootstrapBtnTheme='light'
                    type='submit'
                    />
                </Form>
            </Col>

        </Row>
    </Container>
        )
    }
}

export default Newsletter;