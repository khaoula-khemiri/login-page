import React from 'react';
import loginImg from './login.jpg'
const Login = () => {
    return (
        <div className='container'>
            <div className='login-left'>
                <div class="login-header">
                    <h1>Welcome to our Application </h1>
                    <p>Please login to use the platform</p>
                </div>

                <form className='login-form'>
                    <div className='login-form-content'>
                        <div className='form-item'>
                            <label for="email"> Enter Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className='form-item'>
                            <label for="password"> Enter Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className='form-item'>
                            <div className='checkbox'>
                                <input type="checkbox" id="remmeberMeCheckbox" ></input>
                                <label for="remmeberMeCheckbox" className="checkboxLabel"> Remmeber Me</label>
                            </div>
                        </div>
                        <button type="submit">Sign In</button>
                    </div>
                    <div class="login-form-footer">
                        <a href='#'>
                            <img width="30" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebookLogo" />
                            Facebool Login
                        </a>
                        <a href='#'>
                            <img width="30" src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="googleLogo" />
                            Google Login
                        </a>
                    </div>
                </form>
            </div>
            <div className='login-right'>
                <img src={loginImg} />
            </div>
        </div>
    );
}

export default Login;
