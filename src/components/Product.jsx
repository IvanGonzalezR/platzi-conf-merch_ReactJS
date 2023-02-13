import React from 'react'

const Product = ({ product, handleAddToCart }) => {
  const [ label, setLabel ] = React.useState('Comprar');

  const changeLabel = () => {
    label === 'Comprar'
      ? setLabel('Vender')
      : setLabel('Comprar')
  }
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className='Products-item-info'>
        <h2>
          {product.title}
          <span>
            ${product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={() => {
        handleAddToCart(product);
        changeLabel();
      }}>{label}</button>
    </div>
  )
}

export { Product };
