import React from 'react'
import './Portfolio.scss'
import Picc from '../assets/1.jpg'

const Portfolio = () => {

  const moveTo = () => {
    window.location.href = "http://www.google.sk";
  }

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>

      <h2>Portfolio</h2>
      
      <div className='content'>
        
        <div onClick={moveTo} class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style={{width: "18rem;"}}>
          <img src={Picc} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>
      

    </div>
  )
}

export default Portfolio