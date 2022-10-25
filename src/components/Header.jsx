import React from 'react'
import '../styles/components/Header.css'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Header = () => {

  const { state } = React.useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <NavLink
        to="/"
        end
      >
        <h1 className="Header-title">PlatziConf Merch</h1>
      </NavLink>
      <div className="Header-checkout">
        <NavLink
          // style={({ isActive }) => ({
          //   color: isActive ? 'black' : 'blue'
          // })}
          to="/checkout"
          end
        >
          <i className='fas fa-shopping-basket'></i>
        </NavLink>
        {cart.length > 0 ?
          <div className='Header-alert'>{cart.length}</div>
          : null
        }
      </div>
    </div>
  )
}

export { Header };
