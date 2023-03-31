import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className="container bg-main text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-8 pt-5 bg-main ">
          <h1 className="py-5">WELCOME TO SHOPPAPP</h1>
          <form className="form border border-3 border-primary p-4 m-4 rounded ">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text"
                style={{ color: '#21FF74' }}
              >
                Please login.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              id="login button"
              className="btn btn-outline-warning"
              onClick={() => {
                setIsUserLoggedIn(!isUserLoggedIn);
                console.log(isUserLoggedIn);
              }}
            >
              Login
            </button>
            <div>
              <p className="mt-5 mb-1">
                Don't have an account?
                <Link className="signup-link" to="signup">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default LandingPage;
