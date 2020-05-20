import React from "react";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
export default function() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid slid">
        <div className="row bg-secondary image-sliding">
          <div
            id="carouselExampleControls"
            className="carousel slide"
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
      </div>
      <div className="container-fluid pos-form">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
            <form className="form-border">
              <div className="form-group">
                <small
                  id="emailHelp"
                  className="form-text text-dark text-center"
                >
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h3 className="text-dark mt-4 text-center">
              Subsrciption Amount INR 1,000
            </h3>
            <div className="d-flex justify-content-center">
              <div className="bg-secondary width text-center mt-2 checkout">
                <label className="text-white mt-2">
                  Check out{" "}
                  <i class="fa fa-arrow-right right-key" aria-hidden="true" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
