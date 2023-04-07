import React, { useRef } from "react";
import "../styles/Contacto.css";
import emailjs from "@emailjs/browser";

export default function Contacto() {
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
          alert("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  return (
    <main>
      <section className="contentContact d-flex justify-content-center">
        <div className="row contentContainer">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center info">
            <div className="mt-3 text-center image-container">
              <div>
                <iframe
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Ramos%20Arizpe%201399,%20Roma,%2021250%20Mexicali,%20B.C.+(Elissa%20Nugal%20Beauty%20&amp;%20Care)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="600"
                  frameBorder="0"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure distance on map
                  </a>
                </iframe>
              </div>
            </div>
            <div>
              <p className="mb-5 titleText">
                Located in Mexicali, Baja California, Mexico!
              </p>
              <h3 className="Text">
                <i className="fa-solid fa-map-location-dot"></i>
                <strong> ADDRESS</strong>
              </h3>
              <p className="mb-5">Ave. Ramos Arizpe #1399, Col. Roma 21250</p>
              <h3 className="Text">
                <i className="fa-regular fa-envelope"></i>
                <strong> EMAIL</strong>
              </h3>
              <p className="mb-5">elissanugal_bc@hotmail.com</p>
              <h3 className="Text">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <strong> PHONE</strong>
              </h3>
              <p className="mb-5">+52 686 198 3933</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 formulario">
            <div className="booking-text">
              <h1 className="text-center">Agenda tu cita</h1>
              <h3 className="text-center">
                Mandanos un correo con tus datos, en donde especifiques el{" "}
                <strong>SERVICIO</strong> que te gustaria recibir, asi como
                tambien el horario en el que te gustaria asistir.
              </h3>
              <h2 className="text-center">Ó</h2>
              <h3 className="text-center">
                Tambien puedes mandarnos mensaje por <strong>WHATSAPP</strong>{" "}
                haciendo click en el icono de la aplicación
              </h3>
            </div>
            <div className="whatsapp text-center">
              <a
                href="https://wa.me/526221476009"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="container">
              <h3 className="text-center mb-5">Manda correo electrónico</h3>
              <form ref={form} onSubmit={sendEmail} className="row">
                {/* Name */}
                <div className="col-md-6">
                  <input
                    placeholder="Nombre completo"
                    type="name"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>

                {/* Email */}
                <div className="col-md-6 mt-3 mt-md-0">
                  <input
                    placeholder="Correo electrónico"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>

                {/* Subject */}
                <div className="col-md-6 mt-3">
                  <input
                    placeholder="Servicio"
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                  />
                </div>

                {/* Number */}
                <div className="col-md-6 mt-3">
                  <input
                    placeholder="Telefono"
                    type="number"
                    className="form-control"
                    id="number"
                    name="number"
                  />
                </div>

                {/* Message */}
                <div className="mt-3">
                  <textarea
                    name="message"
                    placeholder="Favor de especificar la fecha y hora de la cita"
                    className="form-control"
                    id="message"
                    rows="3"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="gratitude">Recibiras respuesta a la mayor brevedad posible. Muchas gracias! Stay beauty</h2>
                  <button type="submit" className="btn btn-outline-dark">
                    Enviar correo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
