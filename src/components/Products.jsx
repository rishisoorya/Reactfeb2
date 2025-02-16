import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style = {{height:"200px",width:"100%",objectFit:'contain'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>{props.desc}
        </Card.Text> */}
        <Card.Text>{props.price}
        </Card.Text>
        {/* <Button variant="primary">Add to Cart</Button> */}
        <Link to={"/DisplayProduct/"+props.id}>
        <Button variant="warning">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;