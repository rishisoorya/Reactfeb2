import React from 'react'
import Product from '../components/Products'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Container, Col } from 'react-bootstrap'

function Homepage() {
  const [Products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(json => setProducts(json.data))
  }, [])

  return (
    <>
      {/* <NavbarExample></NavbarExample> */}
      <Container>
        <Row>
          {Products.map((productDetails) => (

            <Col lg={3} key={productDetails.id}>
              <Product
                image={productDetails.image}
                title={productDetails.title}
                desc={productDetails.description}
                price={productDetails.price}
                id={productDetails.id}
              ></Product></Col>))}
        </Row>
      </Container>
    </>
  )
}

export default Homepage