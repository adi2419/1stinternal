

import React from 'react';

const Home = () => {
  return (
    <>
      <title>Floating labels example for Bootstrap</title>

      <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/floating-labels/" />

      {/* Bootstrap core CSS */}
      <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />

      {/* Custom styles for this template */}
      <link href="floating-labels.css" rel="stylesheet" />
      
      <div className="container">
        <form className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
            <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
        </form>
      </div>
    </>
  );
}

export default Home;
