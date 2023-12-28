import React, { useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <div className="loginPage-form-container">
          <form action>
            <h3>sign in</h3>
            <span>username</span>
            <input type="email" name className="box" placeholder="enter your email" id />
            <span>password</span>
            <input type="password" name className="box" placeholder="enter your password" id />
            <div className="checkbox">
              <input type="checkbox" name id="remember-me" />
              <label htmlFor="remember-me"> remember me</label>
            </div>
            <a href="#" className='btn'>sign in</a>
            <p>forget password ? <a href="#">click here</a></p>
            <Link to={'/Register'}></Link>
            <p>don't have an account ? <Link to={'/Register'}>Create One</Link></p>
          </form>
        </div>

      </section>
    </div>
  )
}

export default Login
