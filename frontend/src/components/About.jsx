import {DataProvider} from '../context/DataProvider'
import German from "../image/Ger.jpg";
import Hugo from "../image/hugo.jpg";
import React from "react";
import andrea from "../image/andrea.jpg";
import mega from "../image/megas.jpg";
import patricio from "../image/pato.jpg";

const About = () => {
  return (
    <div className="container"  >
      <div className="  d-flex justify-content-center flex-column p-3 " >
        <div className="text-center">
          <h1>Project AppCrypto</h1>
          <h2>About project</h2>
          <p>This project is a web application that allows users to search for cryptocurrency prices and compare them to other currencies.</p>
        </div>
        <div className="text-center">
          <h3>No Country</h3>
          <h4>C1 Group 8</h4>
          <p>About our team and Organization</p>
        </div>
        <div className="row text-center">      
          <div className="col-12 col-md-6 col-lg-4 mb-2" >
            <div class="card">
              <img src={andrea} class="card-img-top " alt="andrea"/>
                <div class="card-body">
                  <h3 class="card-title text-dark ">Andrea Largo Castro </h3>
                  <h5 class="card-title text-dark ">Team Leader</h5>
                </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-2" >
            <div class="card">
              <img src={German} class="card-img-top" alt="German"/>
                <div class="card-body">
                  <h3 class="card-title text-dark ">German Rodriguez </h3>
                  <h5 class="card-title text-dark ">Developer Fullstack </h5>
                </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-2"  >
            <div class="card">
              <img src={Hugo} class="card-img-top" alt="Hugo"/>
                <div class="card-body">
                  <h3 class="card-title text-dark ">Hugo Tatarinoff</h3>
                  <h5 class="card-title text-dark ">BackEnd Developer</h5>
                </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-2" >
            <div class="card">
              <img src={mega} class="card-img-top" alt="mega"/>
                <div class="card-body">
                  <h3 class="card-title text-dark ">Megas Vanzillotta </h3>
                  <h5 class="card-title text-dark ">Developer</h5>
                </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-2" >
            <div class="card">
              <img src={patricio} class="card-img-top" alt="pato"/>
                <div class="card-body">
                  <h3 class="card-title text-dark ">Patricio Solana</h3>
                  <h5 class="card-title text-dark ">Developer</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
