import React from "react";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
export default function Sampledemo() {
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
      <div className="d-flex justify-content-center proceed-to-test">
        <div className="bg-secondary width text-center mt-2 checkout proceed-to-test">
          <label className="text-white mt-2">
            PROCEED TO TEST{" "}
            <i class="fa fa-arrow-right right-key" aria-hidden="true" />
          </label>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-m-12">
              <div className="d-flex justify-content-center">
                <div className="test-block mt-3 text-center">
                  <label className="align-center">DEMO TEST IS LIVE</label>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12">
              <div className="table-time ml-3 mt-3">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Starts At</td>
                      <td>12th April 2020@ 12.30PM</td>
                    </tr>
                    <tr>
                      <td>Ends At</td>
                      <td>12th April 2020@ 1.15PM</td>
                    </tr>
                    <tr>
                      <td>Test Duration</td>
                      <td>45 Minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="instruction">
              <h3>Test Instruction</h3>
              <ol>
                <li>
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </li>
                <li className="mt-3">
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </li>
                <li className="mt-3">
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
