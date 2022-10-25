import React from 'react'
import '../styles/components/Success.css'
import { AppContext } from '../context/AppContext'
import { Map } from '../components/Map'
import { useGoogleAddress } from '../hooks/useGoogleAddress'


const Success = () => {
  const { state: { buyer } } = React.useContext(AppContext);
  console.log(buyer[ 0 ]);

  let location = useGoogleAddress(
    buyer[ 0 ].address +
    buyer[ 0 ].city +
    buyer[ 0 ].country +
    buyer[ 0 ].cp
  );

  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className='Success-map'>
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export { Success };