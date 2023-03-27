import React from 'react';

const LandingPage = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col bg-primary"></div>
        <div className="col-8 pt-5 bg-success">
          <h1 className="py-5">WELCOME TO SHOPPAPP</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col bg-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            enim mauris. Quisque a pharetra justo, eget condimentum justo.
            Praesent nisi est, ultrices eget nisl sit amet, tristique fringilla
            ipsum. Morbi laoreet fringilla purus, ut ultricies nisl elementum
            pulvinar. Cras eget enim mollis, convallis quam eu, feugiat nibh.
            Phasellus at risus quis neque egestas feugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
