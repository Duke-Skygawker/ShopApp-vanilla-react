import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col bg-primary"></div>
        <div className="col-8 pt-5 bg-success ">
          <h1 className="py-5">WELCOME TO SHOPPAPP</h1>
          <form className="form border border-3 border-primary p-4 rounded ">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
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
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-outline-warning">
              Login
            </button>
            <div>
              <p className="mt-5 mb-1">
                Don't have an account?
                <a className="signup-link" href="#">
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="col bg-primary">
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
