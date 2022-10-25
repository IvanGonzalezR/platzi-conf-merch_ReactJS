import React from 'react'
import '../styles/components/Products.css'
import { Product } from './Product'
import { AppContext } from '../context/AppContext'

const Products = () => {

  const { state: { products }, addToCart } = React.useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  }

  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
    </div>
  )
}

export { Products };
