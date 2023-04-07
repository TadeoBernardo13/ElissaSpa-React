import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer d-flex flex-column align-items-center">
        <div className="row d-flex align-items-center justify-content-center row-container">
          <div className="container col-lg-4 col-md-6">
            <div className="container-fluid">
              <ul className="list d-flex flex-column align-items-center justify-content-center">
                <li className="list-item">SOLO CON CITA:</li>
                <li className="list-item">LUNES: 9:00 - 19:00</li>
                <li className="list-item">MARTES: 9:00 - 19:00</li>
                <li className="list-item">MIERCOLES: 9:00 - 19:00</li>
                <li className="list-item">JUEVES: 9:00 - 19:00</li>
                <li className="list-item">VIERNES: 9:00 - 19:00</li>
                <li className="list-item">SABADO: 9:00 - 19:00</li>
                <li className="list-item">DOMINGO: 9:00 - 13:00</li>
              </ul>
            </div>
          </div>

          <div className="container col-lg-4 col-md-6">
            <div className="container-fluid d-flex flex-column align-items-center">
              <div>
                <img
                  src="assets/logoSpa.png"
                  width="300px"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="container col-lg-4 col-md-6">
            <div className="social-links d-flex justify-content-center align-items-center">
              <ul className="d-flex flex-row">
                <li className="text-center">
                  <a
                    href="https://www.facebook.com/elissanugalbeautycare"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    <p>Elissa Nugal Beauty & Care</p>
                  </a>
                </li>
                <li className="text-center">
                  <a
                    href="https://www.instagram.com/elissanugalbc/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                    <p>@elissanugalbc</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row row-container address-row mt-3">
          <div className="container">
            <h3 className="text-center">
              +52 686 198 3933 • Ave. Ramos Arizpe #1399, Col. Roma 21250 •
              Mexicali, Baja California, Mexico
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
