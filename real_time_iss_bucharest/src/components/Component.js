import React from 'react';

import { Button } from 'react-bootstrap';

const Button = (props) => {
        return (
            <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="light">Sign in</Button>
            </Col>
        </Form.Group>
        )
}

export default Button;