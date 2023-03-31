import React, { useRef } from "react";
import "../styles/Footer.css";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ib5ha1h",
        "template_6kywppm",
        form.current,
        "Z0v-QmL9v7wqKKOIg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
              <div className="social-links d-flex justify-content-center align-items-center">
                <ul className="d-flex flex-row">
                  <li>
                    <a
                      href="https://www.facebook.com/elissanugalbeautycare"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/elissanugalbc/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container col-lg-4 col-md-6 formulario">
            <div className="container" id="contactoForm">
              <h1 className="text-center mb-5">Agenda tu cita</h1>

              {/* <form onSubmit={handleSubmit} className="row">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    placeholder="Tu nombre"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    placeholder="Correo electrónico"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="subject" className="form-label">
                    Asunto
                  </label>
                  <input
                    placeholder="Asunto"
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Mensaje"
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    value="Submit"
                  >
                    Send Message
                  </button>
                </div>
              </form> */}
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
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
