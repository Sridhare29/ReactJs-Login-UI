import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Black from './assert/man.jpg'
import GoogleLogin from 'react-google-login'

function Login() {

    

  return (
    <section>   
        <div className='register'>
            <div className='col1'>
                <h2 >Log in</h2>
                <span>Welcome back! Please enter your details</span>
                <form id='form' className='formsty'>
                    <label title='Username' color='black'/>
                    <p className='text'>Email</p>
                    <input type={"email"} placeholder="Enter Yout Email"/>
                    <p className='text'>Password</p>
                    <input type={"text"} placeholder="Enter Your Password"/>
                    <div className="extra">
                                            <Box className="formcheck">
                                                <input className="forminput" type="checkbox" id="remember" />
                                                <label className="formlabel" htmlFor="remember">
                                                    Remember for 30 days
                                                </label>
                                            </Box>
                                    </div>
                      

                    <button className='btn' onClick={"handleClick"}>Sign in</button>   
                    <div className='forget'>Forgot password</div>
<h4 className='Or' color='gray'>[Or]</h4>
                    <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="            Sign in with Google"
                    cookiePolicy={'single_host_origin'}
                    style={{ borderRadius: '20px' }}
                    isSignedIn={true}
                  />
                 <div className="auth-option">Don't have an account?<Link> Sign up </Link> </div>

                </form>
            </div>
            <div className="col2">
                <img src={Black} alt="" />
            </div>
        </div>
    </section>    
    )
}

export default Login