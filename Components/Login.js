import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='main'>
       <img src='https://th.bing.com/th/id/OIP.IX0DATxRx223zw6bUBVNSwHaCl?pid=ImgDet&rs=1' className='logoo' alt='logo'/>
       <br></br><br></br>
    <div className='signn'>
        <h3><b>Sign in</b></h3>
      <h6><b>Email or Mobile Phone number</b></h6>
      <input type='text' className='in'></input>
      <button className='con'>Continue</button><br></br><br></br>
      <p>By continuing,you agree to Amazon's <a href='#'>Conditions of use</a> and <a href='#'>Privacy Notice.</a></p>
    <div>
      <p class="d-inline-flex gap-1">
      <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         Need help?
     </a>
     </p>
    <div class="collapse" id="collapseExample">
     <div class="card card-body bbb">
          <a href='#'>Forgot your password?</a>
          <a href='#'>Other issues with Sign-In</a>
   </div>
     </div>
</div>
    
    </div>
    <br></br>
       <span className='ama'> -------------------  New to Amazon--------------------</span> 
    <div>
        <br></br>
        <button className='create'>Create your Amazon account</button>
    </div>
    </div>
  )
}

export default Login