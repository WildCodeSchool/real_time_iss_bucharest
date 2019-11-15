import React from 'react';

// before using this component, please install react-bootstrap
// with the command npm install react-bootstrap bootstrap

import { Button, Form, Row, Col } from 'react-bootstrap';


const CustomBtn = (props) => {
        return (
            <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
                <Button
                type={props.type}
                variant={props.bootstrapBtnTheme}
                block>{props.text}
                </Button>
            </Col>
        </Form.Group>
        )
}

export default CustomBtn;