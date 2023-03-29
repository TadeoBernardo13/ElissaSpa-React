import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/Contacto.css";

export default function Contacto() {
  return (
    <main>
      <section className="contentContact d-flex justify-content-center align-items-center">
        <div className="containerCont">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center contacto">
              <Fade>
                <div className="mt-3 text-center image-container">
                  <img src="assets/static_map.png" className="img-fluid"/>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-md-12">
              <Fade bottom>
                <p className="mb-5 titleText">
                  Located in Mexicali, Baja California, Mexico!
                </p>
                <h3 className="Text">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <strong> ADDRESS</strong>
                </h3>
                <p className="mb-5">Ave. Ramos Arizpe #1399, Col. Roma 21250</p>
              </Fade>
              <Fade bottom>
                <h3 className="Text">
                  <i class="fa-regular fa-envelope"></i>
                  <strong> EMAIL</strong>
                </h3>
                <p className="mb-5">elissanugal_bc@hotmail.com</p>
              </Fade>
              <Fade bottom>
                <h3 className="Text">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <strong> PHONE</strong>
                </h3>
                <p className="mb-5">+52 686 198 3933</p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
