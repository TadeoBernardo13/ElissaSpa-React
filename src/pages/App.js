import "../styles/App.css";
import Fade from "react-reveal/Fade";
import Cards from "../components/Cards";

export default function App() {
  return (
    <main>
      <section className="hero">{/* Background Hero in CSS */}</section>
      <section className="eslogan d-flex justify-content-center align-items-center">
        <div className="container">
          <Fade bottom>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h2>Creamos la mejor versión de ti</h2>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="content d-flex justify-content-center align-items-center">
        <div className="container">
          <Fade bottom>
            <p className="text-center mb-5 firstText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              aut libero eaque rerum explicabo soluta alias porro neque ut
              quibusdam.
            </p>
          </Fade>
          <Cards />
        </div>
      </section>
    </main>
  );
}
