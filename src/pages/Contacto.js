import React from "react";
import "../styles/Contacto.css";

export default function Contacto() {
  return (
    <main>
      <section className="contentContact d-flex justify-content-center align-items-center">
        <div className="containerCont">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center contacto">
              <div className="mt-3 text-center image-container">
                <img src="assets/static_map.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="mb-5 titleText">
                Located in Mexicali, Baja California, Mexico!
              </p>
              <h3 className="Text">
                <i class="fa-solid fa-map-location-dot"></i>
                <strong> ADDRESS</strong>
              </h3>
              <p className="mb-5">Ave. Ramos Arizpe #1399, Col. Roma 21250</p>
              <h3 className="Text">
                <i class="fa-regular fa-envelope"></i>
                <strong> EMAIL</strong>
              </h3>
              <p className="mb-5">elissanugal_bc@hotmail.com</p>
              <h3 className="Text">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <strong> PHONE</strong>
              </h3>
              <p className="mb-5">+52 686 198 3933</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
