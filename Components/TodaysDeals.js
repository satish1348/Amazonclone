import React from 'react'
import './TodayDeals.css'
// import { Link } from 'react-router-dom'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function TodaysDeals() {
    const navigate = useNavigate();

  return (
    <div className='todaydeals'>
         <div className='prod-nav'>
            <nav>
                <div className='prod-item prod-item-active'>Today's Deals</div>
                <div className='prod-item'>Coupons</div>
                <div className='prod-item'>Renewed Deals</div>
                <div className='prod-item'>Outlet</div>
                <div className='prod-item'>Amazon Warehouse</div>
            </nav>
        </div>
        <div className='prod-prom'>
            <div className='prod-prom-1'>
                <div><img className='prod-prom-img' src="https://m.media-amazon.com/images/I/81TzcFJGBML._AC_UL400_.jpg"/></div>
                <div>
                    <p>SIDIZ T80 Premium Ergonomic Office Chair : Extreme Comfort Home Office Desk Chair, Adjustable<br/>Headrest, Lumbar Support, 3D Armrests, Forward Tilt, Seat Depth, Alternative Gaming Chair (White)</p>
                </div>
                <div>
                <i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bx-star'></i>229
                </div>
                <div className='price'>
                    <span><sup>$</sup>699<sup>00</sup></span>
                    <img className='prod-prom-img' src="https://www.logo.wine/a/logo/Amazon_Prime/Amazon_Prime-Logo.wine.svg"/>
                </div>
            </div>
            <div className='prod-prom-2'>
                <img className="prod-prom-img" src="https://m.media-amazon.com/images/I/61Ch+F6jrLL._AC_SY879_.jpg"/>
                <button className='prod-prom-btn'>Shop now</button>
            </div>
        </div>
        <div className='prod-heading'>
            <h2>Today's Deals</h2>
            <p>sponsored<i class='bx bxs-info-circle' ></i></p>
        </div>
        <div className='prod-carousel'>
        {/* <div id="carouselExampleDark-1" class="carousel carousel-dark slide">
            <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner  prod-scarousel-inner">
                <div class="carousel-item prod-scarousel-item active" data-bs-interval="10000">
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png'/>
                        <h6>All Deals</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/launchpad/2023/BentoDealASIN.jpg'/>
                        <h6>Back to School</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/launchpad/2023/BagDealsASIN.jpg'/>
                        <h6>Off to College</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/01/goldbox/B07XKF5RM3.01.RMXXXXXX2.png'/>
                        <h6>Amazon Devices</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Computers_white._CB468586682_.png'/>
                        <h6>Computers & Accessories</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Electronics_white._CB468586680_.png'/>
                        <h6>Electronics</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Home_white._CB468586683_.png'/>
                        <h6>Home</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Fashion_white._CB468586683_.png'/>
                        <h6>Fashiom</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Beauty_white._CB468586681_.png'/>
                        <h6>Beauty</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Kitchen_white._CB468586676_.png'/>
                        <h6>Kitchen</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/img22/Events/PrimeCCHFK/Q2_2022_PrimeCC_HFKDealEvent_category-bubble_sobe_320x320_3_003.png'/>
                        <h6>Furniture</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1405415_2158742_US_CUTTLE_200x200_en_US.jpg'/>
                        <h6>Tvs & Accessories</h6>
                    </div>
                    <div>
                        <img src='https://m.media-amazon.com/images/G/01/goldbox/images/faceout/rsz_homeimprovement.png'/>
                        <h6>Home DIV & Appliances</h6>
                    </div>
                </div>
                <div class="carousel-item prod-scarousel-item" data-bs-interval="2000">
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                    <div>
                        <img/>
                        <h6></h6>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev prod-sc-prev" type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next prod-sc-next" type="button" data-bs-target="#carouselExampleDark-1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> */}
    
            
        </div>
        <div className='products pro1'>
        <div className='side1'>
            <div className='side1-links'>
                <ul className='side1-links-ul'>
                    <li className='li li-active'><a src="www.amazon.com">All deals</a></li>
                    <li className='li'><a>Available</a></li>
                    <li className='li'><a>Upcoming</a></li>
                    <li className='li'><a>Watchlist</a></li>
                </ul>
            </div>
            <form>
            <div className='side1-item'>
            <h3 className='side1-heading'>Prime Programs</h3>
            <input type='checkbox'/> <span className='side1-text prime-sym'>✓</span><span className='side1-text prime-text'>prime</span><br/>
            <input type='checkbox'/><span className='side1-text'>Prime Early Access deals</span><br/>
            <input type='checkbox'/><span className='side1-text'>Prime Exclusive deals</span>
            </div>
            <div className='side1-item '>
            <h3 className='side1-heading'>Departments</h3>
            <a className='li deparli'>Select all</a><br/>
            <input type='checkbox'/><span className='side1-text'>Amazon Devices & Accessories</span><br/>
            <input type='checkbox'/><span className='side1-text'>Appliances</span><br/>
            <input type='checkbox'/><span className='side1-text'>Arts, Crafts & Sewing</span><br/>
            <input type='checkbox'/><span className='side1-text'>Baby Clothing & Shoes</span><br/>
            <input type='checkbox'/><span className='side1-text'>Boys' Fashion</span><br/>
            <input type='checkbox'/><span className='side1-text'>Books</span><br/>
            <input type='checkbox'/><span className='side1-text'>Beauty & Personal Care</span><br/>
            <input type='checkbox'/><span className='side1-text'>Cell Phones & Accessories</span><br/>
            <input type='checkbox'/><span className='side1-text'>Costumes & Accessories</span><br/>
            <input type='checkbox'/><span className='side1-text'>CDs & Vinyl</span><br/>
            <input type='checkbox'/><span className='side1-text'>Camera & Photo</span><br/>
            <input type='checkbox'/><span className='side1-text'>Clothing, Shoes & Jewelry</span><br/>
            <input type='checkbox'/><span className='side1-text'>Electronics</span><br/>
            <input type='checkbox'/><span className='side1-text'>Health & Household</span><br/>
            <input type='checkbox'/><span className='side1-text'>Home & Kitchen</span><br/>
            <input type='checkbox'/><span className='side1-text'>Kitchen & Dining</span><br/>
            </div>
            <div className='side1-item'>
            <h3 className='side1-heading'>Deal type</h3>
            <a className='li li-active'>All deals</a><br/>
            <a className='li'>Top Deal</a><br/>
            <a className='li'>Lightening Deal</a><br/>
            <a className='li'>Best Deal</a><br/>
            </div>
            </form>
          </div>
          <div className='side2'>
          <div class="prod-card c1" >
           <Link to={'./doremon'} ><img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/></Link>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>

           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41lImJVGh9L._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 20% off</a>
           <p class="prod-card-text">Boost Infinite Unlocked Phone SIM Kit</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51-wtLQmnfL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 50% off</a>
           
           <p class="prod-card-text">School Supplies from Five Star, BIC, and More</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61CgO4Yms-L._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 28% off</a>
           
           <p class="prod-card-text">Keurig Coffee Brewers and Accessories</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51dqAgciyyL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 41% off</a>
           
           <p class="prod-card-text">School Supplies from Amazon Basics</p>
           </div>
           </div>

           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41VT7HzMPML._AC_SR400,600_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 35% off</a>
           <p class="prod-card-text">Brita Water Pitchers & Dispensers</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41GdF1MmuUL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 37% off</a>
           
           <p class="prod-card-text">Luggage and Travel</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41wNuyWh1aL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 40% off</a>
           
           <p class="prod-card-text">upsimples 12x18 Picture Frame Set of 5</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/61c7cBRUDGL._AC_UL400_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 10% off</a>
           <p class="prod-card-text">Doremon, Nobita, Shizuka, Suneo Sunboard Cutout (4 Cutouts), Size: 30.48 cm x 45.72 cm, Birthday Gift, Kids Cartoon</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/417Oa7sV+wL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">KS deals on smartwatches-Fire-Boltt, Noise, Beat-XP and more</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/41Mgz+koQcL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 36% off</a>
           
           <p class="prod-card-text">High Performance Intel i5 & I7 Laptops</p>
           </div>
           </div>
           <div class="prod-card c1" >
           <img src="https://m.media-amazon.com/images/I/51hvBtWe0IL._AC_UF226,226_FMjpg_.jpg" class="prod-card-img-top " alt="..."/>
           <div class="prod-card-body">
           <a href="#" class="btn btn-danger">Up to 87% off</a>
           
           <p class="prod-card-text">Gaming Laptops starting INR 49990 - No Cost EMI & Exchange Available</p>
           </div>
           </div>
          
          </div>
          
        </div>

       
        
    </div>
  )
}

export default TodaysDeals