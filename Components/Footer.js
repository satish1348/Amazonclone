import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='foo'>
        <div class="d-grid gap-2 btt">
        <button class="btn back" type="button">Back to top</button>
        </div>
        <div className='footer'>
            <ul className='noBullets list1'>
                        <li className='headLi'>Get to Know Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                        <li>Amazon Science</li>
            </ul>
            <ul className='noBullets list2'>
                    <li className='headLi'>Make Money with Us</li>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Make Money with Us</li>
            </ul>
            <ul className='noBullets list3'>
                    <li className='headLi'>Amazon Payment Products</li>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
            </ul>
            <ul className='noBullets list4'>
                    <li className='headLi'>Let Us Help You</li>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
            </ul>
        </div>
        <div className='footer-inner'>
                <img className="logo logol" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
                <div className='footer-inner-info'>
                <button type="button" class="btn btn-outline-secondary b1">English</button>
                <button type="button" class="btn btn-outline-secondary b2">Secondary</button>
                <button type="button" class="btn btn-outline-secondary b3">United States</button>
                </div>
        </div>
    </div>
  )
}

export default Footer