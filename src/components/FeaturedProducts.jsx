import React from 'react'
import { useLoaderData } from 'react-router-dom'

function FeaturedProducts() {
    const {products} =useLoaderData();
    console.log(products);
  return (
    <div>FeaturedProducts</div>
  )
}

export default FeaturedProducts