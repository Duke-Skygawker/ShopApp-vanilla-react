import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const SignupPage = () => {
  const handleLogin = (e) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    e.preventDefault();
    setIsUserLoggedIn(true);
    console.log(isUserLoggedIn);
    return isUserLoggedIn;
  };

  return (
    <div className="container bg-main text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-8 pt-5 bg-main ">
          <h1 className="py-5">CREATE AN ACCOUNT</h1>
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
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
              onClick={handleLogin}
            >
              Signup
            </button>
            <div>
              <p className="mt-5 mb-1">
                Have an account?
                <Link className="signup-link" to="/">
                  Login
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

export default SignupPage;
