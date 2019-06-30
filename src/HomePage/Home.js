import React, { Component } from "react";
import "./Home.css";
import HomeBanner from "../images/homeBanner.jpg";
import {FaLaptopCode,FaMobileAlt,FaRegChartBar,FaPenNib,FaMarker,FaHeadset,FaCode,FaDesktop,FaChartLine} from 'react-icons'



class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <img src={HomeBanner} alt="recruiting" className="homeBanner" />
          </div>
        </header>
        <main>
          <div className="sections">
            <section className="section categories">
              <div className="category">
                <h5>Find your freelancer</h5>
                <div className="categoryCards">
                  <div className="categoryCard">
                    <div className="categoryIcon">

                        </div>
                    <div className="categoryName">
                        </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section trustedCompanies">
              <div className="company">
                <h5>Microsoft</h5>
                <h5>Google</h5>
              </div>
            </section>
            <section className="section howItWork">
              <div className="step step1">
                <h5>post CV</h5>
                <h5>Recruiters will come to you </h5>
              </div>
            </section>
            <section className="section business">
              <div className="offer">
                <h5>Basic</h5>
                <h5>Plus </h5>
                <h5>Business </h5>
                <h5>Enterprise </h5>
              </div>
            </section>
            <section className="section recommendation">
              <div className="gomycode">
                <h5>Go My Code</h5>
                <p>
                  .........................................
                  ............................................
                  ............................................
                  ............................................
                  ............................................
                  ............................................
                  ............................................
                  ............................................
                  ............................................
                </p>
              </div>
            </section>
            <section className="section skills">
              <div className="top">
                <h5>Top Skills</h5>
              </div>
              <div className="trending">
                <h5>Top Skills</h5>
              </div>
              <div className="cities">
                <h5>Top Skills</h5>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default Home;
