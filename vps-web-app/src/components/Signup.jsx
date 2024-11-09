import React from "react";
import "../css/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import github from "../images/github.png";
import google from "../images/google.png";
import box from "../images/box.png";

function Signup() {
  return (
    <div className="signup" style={{ marginTop: "3rem" }}>
      <div className="container">
        <div className="row shadow" style={{ borderRadius: ".5rem" }}>
          {/* Left Column for Form */}
          <div className="col-12 col-md-6 p-4 ps-lg-5"> {/* Add `ps-lg-5` for left padding on large devices */}
            <h2 className="mb-4">Sign Up with Email</h2>
            <form className="form-container">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control in"
                  id="email"
                  placeholder="Please enter email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="code" className="form-label fw-bold">
                  Email verification code
                </label>
                <div className="input-group in">
                  <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Please enter email verification"
                  />
                  <button type="button" className="btn btn-primary">
                    Get
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control in"
                  id="password"
                  placeholder="Please enter password"
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    Terms of Service
                  </a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary in mb-3">
                Sign Up
              </button>
              <p className="" style={{marginLeft:"3rem"}}>
                I have an account?{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Sign In
                </a>
              </p>
            </form>
            <hr />
            <div>
              <button className="btn btn-outline-dark in mb-2 d-flex align-items-center justify-content-center">
                <img src={github} alt="Github" className="me-2" style={{ height: "20px" }} />
                Sign Up with Github
              </button>
              <button className="btn btn-outline-danger in d-flex align-items-center justify-content-center">
                <img src={google} alt="Google" className="me-2" style={{ height: "20px" }} />
                Sign Up with Google
              </button>
            </div>
          </div>

          {/* Right Column for Mystery Box Info */}
          <div className="col-12 col-md-6 bg-primary text-white d-flex flex-column align-items-center justify-content-center p-4">
            <h1 className="exclu">Exclusive</h1>
            <h1 className="exclu">Mystery Box</h1>
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-12 col-md-6 mt-4">
                <p className="s-title text-center">for New user</p>
                <div className="Color-step"></div>
                <div className="container mt-3">
                  <div className="item">
                    <div className="circle">1</div>
                    <div className="content">
                      <span className="main-heading fw-bold text-white">
                        Sign up your account
                      </span>
                      <span className="sub-heading fw-light text-white">
                        (get the Mystery Box)
                      </span>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="item">
                    <div className="circle">2</div>
                    <div className="content">
                      <span className="main-heading">Fill in your billing information</span>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="item">
                    <div className="circle">3</div>
                    <div className="content">
                      <span className="main-heading">Open the Mystery Box.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-4">
                <img src={box} alt="Mystery Box" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
