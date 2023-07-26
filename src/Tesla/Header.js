import React from 'react'
import logo from '../images/logo.svg'

function Header() { 
  return (
    <div>
        <>
    
        <header>
        <img src={logo} alt="Tesla logo"/>

            <ul>
                <li><a href="Model s">Model S</a></li>
                <li><a href='Model 3'>Model 3</a></li>
                <li><a href='Model x'>Model x</a></li>
                <li><a href='Model y'>Model y</a></li>
                <li><a href='Solar Root'>Solar Root</a></li>
                <li><a href='Solar Panels'>Soler panels</a></li>
            </ul>
                <ul>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>Account</a></li>
                    <li><a href=''>Menu</a></li>
                </ul>
        </header>

        </>
    </div>
  )
}

export default Header