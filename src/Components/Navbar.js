import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-dark px-5" >
  <a class="navbar-brand" href="#" style={{color: "white"}}>DICTIONARY</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/" style={{color: "white"}}>Home</a>
      <a class="nav-item nav-link" href="/history" style={{color: "white"}}>History</a>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar



