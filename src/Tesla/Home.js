import React from 'react'
import Header from './Header'
import Section from './Section'
import "./Style.css"

function Home() {
  return (
    <>
      <Header />
      <Section
        id='model_3'
        name='Model 3'
        para='Order Online for Touchless Delivery'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
        arrow={true}
      />
      <Section
        id='model_y'
        name='Model Y'
        para='Order Online for Touchless Delivery'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
      />
      <Section
        id='model_s'
        name='Model S'
        para='Order Online for Touchless Delivery'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
      />
      <Section
        id='model_x'
        name='Model X'
        para='Order Online for Touchless Delivery'
        leftbtn='Custom Order'
        rightbtn='Existing Inventory'
      />
      <Section
        id='solar_panel'
        name='Solar Panels'
        para='Lower Cost Solar Panels in India'
        leftbtn='Order Now'
        rightbtn='Learn More'
      />
      <Section
        id='solar_roof'
        name='Solar Roof'
        para='Produce Clean Energy from your roof'
        leftbtn='Order Now'
        rightbtn='Learn More'
      />
      <Section
        id='acc'
        name='Accessories'
        leftbtn='Order Now'
      />

    </>
  )
}

export default Home