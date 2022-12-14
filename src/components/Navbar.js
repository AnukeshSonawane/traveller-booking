import React from 'react'
import travelimg from '../images/travelimg.png'

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mx-3" href="#"><b>Welcome To Tours And Travels</b></a>
      <a class="navbar-brand mx-3" href="/message"><button type="button" class="btn btn-outline-secondary">Feed Back</button></a>
      <a class="navbar-brand mx-3" href="/"><button type="button" class="btn btn-outline-secondary">Log Out</button></a>
      <a class="navbar-brand mx-3" href="/help"><button type="button" class="btn btn-outline-secondary">Help</button></a>
      
  </nav>

  )
}

export default Navbar

