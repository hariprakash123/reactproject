import React from "react";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
export default function Landingpage() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row bg-secondary image-sliding">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h2 className="text-center caption-align-center">
                  GOLD BANNER CAPTION
                </h2>
                <div className="sub-title text-center">
                  <label>Banner Caption SubTitle</label>
                </div>
                <div className="d-flex justify-content-center flex-row mt-2">
                  <div className="active-button">
                    <input type="button" value="Active Gold" />
                    <input type="button" value="connect with us" />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <h4 className="text-muted mt-4 heading-bottom-border">How It Works</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-6">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">Step1</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-6">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">Step1</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-6">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">Step1</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-xl-3 col-md-6">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">Step1</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="d-flex flex-row justify-content-center mt-4">
            <h4 className="heading-bottom-border text-muted mt-3">
              Gold Test Types
            </h4>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card borderless-card mt-4">
                <div className="card-header text-muted">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center text-muted">
                    Sample Test Type 1
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="first"
                    className="btn btn-secondary text-white go-where-btn"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-xl-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="card borderless-card mt-4">
                  <div className="card-header text-muted">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-muted">
                      Sample Test Type 1
                    </h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      href="first"
                      className="btn btn-secondary text-white go-where-btn"
                    >
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <h4 className="text-muted mt-4 heading-bottom-border">Test Library</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 mt-3">
            <div className="card">
              <div className="card-header text-muted">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center text-muted">
                  Test library 1
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="d-flex flex-row justify-content-center mt-4">
          <h4 className="heading-bottom-border text-muted mt-3">
            Hiremee Gold Features
          </h4>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="card">
                  <div className="card-header text-muted">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-muted">
                      Test library 1
                    </h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" />
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
            <form>
              <div className="form-group">
                <small id="emailHelp" className="form-text text-dark">
                  To know more Connect with us.
                </small>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="College Name"
                />
                <input
                  type="email"
                  className="form-control mt-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Years of Passedout"
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                Submit your Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
