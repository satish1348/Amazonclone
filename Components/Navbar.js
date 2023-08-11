import React from 'react'
import './Navbar.css'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'./'} ><img src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' className='logo' alt='logo'/></Link>
                <button onClick={()=>navigate('./')} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="www.amazon.comnavbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link active navBtn" aria-current="page" href="www.amazon.com">Hello<br/><span className='selAdd'><i class='bx bxs-edit-location'></i>Select your address</span></a>
                        </li>
                        <form className="d-flex" role="search">
                            <div className='searchMain'>
                            <select className='searchSel'>
                                <option>All</option>
                            </select>
                            <input className="form-control me-2" type="search" placeholder="Search Amazon.in" aria-label="Search"/>
                            <button className="btn btn-outline-success searchIcon" type="submit"><i class='bx bx-search'></i></button>
                            </div>
                        </form>
                        <div className='lang'>
                        <li className="nav-item">
                            <a className="nav-link" href="www.amazon.com">
                            <select className='navBtn'>
                                <option><h1 className='selEn'>EN</h1></option>
                            </select>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link"  role="button"  aria-expanded="false">
                                <button onClick={()=>navigate('./login')} className='navBtn dropdown-toggle'>Hello,sign in <br/><span className='selAdd'>Accounts & Lists</span></button>
                            </a>
                        </li>
                        <a className="nav-link"  role="button"  aria-expanded="false">
                                <button onClick={()=>navigate('./login')} className='navBtn'>Returns<br/><span className='selAdd'>&orders</span></button>
                        </a>
                        <a className="nav-link"  role="button"  aria-expanded="false">
                            <button onClick={()=>navigate('./cart')} className='navBtn' ><i class='bx bx-cart cartIcon' ></i><span className='selAdd'>
                               
                               Cart </span></button>
                        </a>
                        </div>
                          
                    </ul>
                </div>
            </div>
        </nav>
        <div className='secNav'><button class="btn secNavBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class='bx bx-menu allBtn'></i>All</button>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Hello, Sign in</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
            <div class="btn-group">
                <a href="#" class="btn secNavBtn" aria-current="page">Amazon miniTV</a>
                <a href="#" class="btn secNavBtn">Sell</a>
                <a href="#" class="btn secNavBtn">Best Sellers</a>
                <Link to={'./todaydeals'} class="btn secNavBtn" aria-current="page">Todays Deals</Link>
                <a href="#" class="btn secNavBtn">Mobiles</a>
                <a href="#" class="btn secNavBtn" aria-current="page">New Releases</a>
                <a href="#" class="btn secNavBtn">Customer Service</a>
                <a href="#" class="btn secNavBtn">Registry</a>
                <a href="#" class="btn secNavBtn" aria-current="page">Electronics</a>
                <a href="#" class="btn secNavBtn" aria-current="page">Home & Kitchen</a>
                <a href="#" class="btn secNavBtn">GiftCards</a>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar