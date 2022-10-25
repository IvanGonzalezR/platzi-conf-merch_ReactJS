import React from 'react'
import '../styles/components/Payment.css'
import { AppContext } from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const { state: { cart, buyer }, addNewOrder } = React.useContext(AppContext);
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'AXilMN0tH7E6TGw7cHh8IpYgiRvpHGGJOYCAo5IfOz6S6v0zkJ0OAduM1ESW9fPguBEV5XWnOeV6-UA7',
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      navigate('/checkout/success/');
      addNewOrder(newOrder);
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={0.1}
            onStart={() => console.log('start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export { Payment };