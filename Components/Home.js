import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home'>
       <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div className='line'>
                <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in</p>
            </div>
            <div className='carditems'>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Toys Under $30</h3>
                        <p class="card-text"></p>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Today's Deals</h3>
                        <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>  
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Health & Personal Care</h3>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>  
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Electronics</h3>
                        <p class="card-text"></p>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='carditems'>
                <div class="card" >
                    <div class="card-body">
                    <h3 class="card-title">Beauty picks</h3>
                    <p class="card-text"></p>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" class="card-img-top" alt="..."/>
                    <a href="#" class="">shop now</a>
                </div>
            </div>
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">Great Freedom sale</h3>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_PC_CC_1X_EN._SY304_CB599188017_.jpg" class="card-img-top" alt="..."/>
                    <a href="#" class="">see all</a>  
                </div>  
            </div>
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">Upto 70%off| Clearance store</h3>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" class="card-img-top" alt="..."/>
                    <a href="#" class="">see more</a>  
                </div>
            </div>
        <div class="card" >
            <div class="card-body">
                <h3 class="card-title">Top Deal / Beach Tents</h3>
                <p class="card-text"></p>
                <img src="https://m.media-amazon.com/images/I/51VVGO+9yjL._AC_SY230_.jpg" class="card-img-top" alt="..."/>
                <a href="#" class="">see all Deals</a>
            </div>
        </div>
    </div>
 </div>
        <div className='carousel-2'>
        <div id="carouselExampleDark-2" class="carousel carousel-dark slide">
            <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner scarousel-inner">
            <h4 className='carousel-text'>Frequently repurchased in Drugstore</h4>
                <div class="carousel-item scarousel-item active" data-bs-interval="10000">
                    <img src="https://m.media-amazon.com/images/I/818APV7+vyL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/612lQFCbIYL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71e6GbofUPL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/61WkUwQ3UEL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/51yeBfRCRUL._AC_SY200_.jpg" class="w--10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71AQviggMTL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/61Tc7SOflkL._AC_SY200_.jpg" class="w-10" alt="..."/>

                </div>
                <div class="carousel-item scarousel-item" data-bs-interval="2000">
                    <img src="https://m.media-amazon.com/images/I/61Tc7SOflkL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/81t6ws1HsWL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71cUZC7mCqL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71s1DNrZVmL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71TjQ9rvabL._AC_SY200_.jpg" class="w-10" alt="..."/>
                    <img src="https://m.media-amazon.com/images/I/71NKK16R31L._AC_SY200_.jpg" class="w-10" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev sc-prev" type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next sc-next" type="button" data-bs-target="#carouselExampleDark-2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        <br></br><br></br><br></br>
        <div className='carditems'>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Toys Under $30</h3>
                        <p class="card-text"></p>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Home & Kitchen Under $30</h3>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>  
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Health & Personal Care</h3>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>  
                    </div>
                </div>
                <div class="card" >
                    <div class="card-body">
                        <h3 class="card-title">Electronics</h3>
                        <p class="card-text"></p>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" class="card-img-top" alt="..."/>
                        <a href="#" class="">shop now</a>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Home