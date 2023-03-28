import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer d-flex align-items-center row">
        <div className="container col-lg-4 col-md-6 d-flex align-items-center">
          <div className="container-fluid">
            <ul className="list">
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
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            <div>
              <img src="assets/logoSpa.png" width="500px" alt="" className="img-fluid"/>
            </div>
            <div className="social-links">
              <ul className="d-flex justify-content-center align-items-center">
                <li>
                  <a href="https://www.facebook.com/elissanugalbeautycare" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elissanugalbc/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container col-lg-4 col-md-6">
          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Tu Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-outline-dark">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
