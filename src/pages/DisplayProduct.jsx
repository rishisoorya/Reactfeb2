import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DisplayProduct() {
  const [products, setProducts] = useState({});
  let{id}=useParams();
 useEffect(() => {
   axios.get('https://fakestoreapi.com/products/'+id)
   .then(res=>{
     console.log(res)
     setProducts(res.data)
   })
   .catch(erro=>{
     console.log(erro)
   })
   
 }, []); 

  return (
    <>
    <h1>Product Details</h1>
     <img src={products.image} />
     <h2>{products.title}</h2>
     <p>{products.description}</p>
     <p>{products.price}</p>
     </>
  )
}

export default DisplayProduct