import React from 'react';
import {Card} from 'react-bootstrap';

const News = (props) => {
  return (<div>
    <Card bg="dark" text="white" style={{ width: '950px' }} className='newsBox' >
      <Card.Header className='newsBoxTitle'>{props.title}</Card.Header>
      <Card.Body className='newsBoxContainer'>
        <Card.Text className='newsBoxText'>
          {props.text}
      </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default News;
