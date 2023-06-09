import "../styles/App.css";
import Cards from "../components/Cards";

export default function App() {
  return (
    <main>
      <section className="hero">{/* Background Hero in CSS */}</section>
      <section className="eslogan d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h2>Creamos la mejor versión de ti</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content d-flex justify-content-center align-items-center">
        <div className="container">
          <Cards />
        </div>
      </section>
    </main>
  );
}
