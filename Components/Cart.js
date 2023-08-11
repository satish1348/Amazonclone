import React from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate();

  return (
    <div>
        <div className='cart-box'>
            <img className="cart-empty-img" src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'/>
            <div className='cart-box-info'>
                <h3>Your Amazon Cart is empty</h3>
                <a href="www.amazon.com">Shop today's deals</a>
                <div className='cart-box-btns'>
                  <button onClick={()=>navigate('./login')} className='cart-sign-in'>Sign in to your account</button>
                  <button onClick={()=>navigate('./login')} className='cart-sign-up'>Sign up now</button>
                </div>
            </div>
        </div>
        <div className='cart-box-2'>
        </div>
        <div className='cart-para'>
          <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <span className='learn-more'><a href="www.amazon.com">Learn more</a></span></p>
          <p>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        </div>

        
        <div className='cart-carousel-1'>
        <div id="carouselExampleDark-1" class="carousel carousel-dark slide">
            <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner cart-scarousel-inner">
            <h4 className='cart-carousel-text'>International top sellers</h4>
                <div class="carousel-item cart-scarousel-item active" data-bs-interval="10000">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71pcz1kOvxL._AC_UL160_SR160,160_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61DHDNGB9KL._AC_UL160_SR160,160_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/611AnT4qiOL._AC_UL160_SR160,160_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81M9tXIO7xL._AC_UL160_SR160,160_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/41LlzjV9ZiL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51iHGN5V7iL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="w-10" alt="..."/>
                </div>
                <div class="carousel-item cart-scarousel-item" data-bs-interval="2000">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51CPYGrEqOL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/21fKjf7323S._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/41qsPjW6kvL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/41JPJJh2DWL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/31rZcGd+U2L._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/31wLfGad1XL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev cart-sc-prev" type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next cart-sc-next" type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        <div className='cart-carousel-2'>
        <div id="carouselExampleDark-2" class="carousel carousel-dark slide">
            <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner cart-scarousel-inner">
            <h4 className='cart-carousel-text'>Recommended based on your shopping trends</h4>
                <div class="carousel-item cart-scarousel-item active" data-bs-interval="10000">
                    <img src="https://m.media-amazon.com/images/I/614dUeZq7fL._AC_SR405,405_.jpg" class="w-10" alt="..."/>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51w0hshv31L._AC_UL160_SR160,160_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/41oTCwNqodL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/61BSAA0SfhL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/817EvPtXzAL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/61325E9Z6JL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                </div>
                <div class="carousel-item cart-scarousel-item" data-bs-interval="2000">
                    <img src="https://m.media-amazon.com/images/I/51-sZM51kbL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/41jPsEXc1+L._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/31SmPMkDmvL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/51gidgaU3ZL._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/51OAA0bIgqS._AC_UF226,226_FMjpg_.jpg" class="w-10" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev cart-sc-prev" type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next cart-sc-next" type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Cart