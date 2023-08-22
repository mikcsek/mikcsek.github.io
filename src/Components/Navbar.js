import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
    
    const [bg, setBg] = useState(false);

    const changeBg = () => {

        if(window.scrollY >= 80) {

            setBg(true);
        } else {
            setBg(false);
        }
    }

    window.addEventListener("scroll", changeBg);

  return (
        <div>
            <nav id='navbar' className={bg ? 'navbar navbar-expand-lg position-fixed z-2 w-100 background' : 'navbar navbar-expand-lg position-fixed z-2 w-100'}>
                <div className="container-fluid d-flex flex-column justify-content-between">
                    <p className='navbar-brand'>Mikuláš Ábrahám</p>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a href="#home">Home</a>
                            <a href="#skills">Skills</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contact">Contact</a>                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar