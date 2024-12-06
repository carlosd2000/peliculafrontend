import React, {useState} from 'react';
import "./App.css";
import MovieList from "./components/MovieList";
import logo from "../src/assets/img/movie.png"

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "bad boy",
      genre: "accion",
      image: "bad boys.png",
    },
    {
      id: 2,
      title: "el exorcista",
      genre: "terror",
      image: "el exorcista.png",
    },
    {
      id: 3,
      title: "el padrino",
      genre: "Action",
      image: "el padrino.png",
    },
    {
        id: 4,
        title: "instensamente",
        genre: "animado",
        image: "intensamente.png",
      },
      {
        id: 5,
        title: "los increibles",
        genre: "animado",
        image: "los increibles.png",
      },
      {
        id: 6,
        title: "los vengadores",
        genre: "accion",
        image: "los vengadores.png",
      },
      {
        id: 7,
        title: "matrix",
        genre: "accion",
        image: "matrix.png",
      },
      {
        id: 8,
        title: "el rey leon",
        genre: "animado",
        image: "rey leon.png",
      },
      {
        id: 9,
        title: "volver al futuro",
        genre: "accion",
        image: "volver al futuro.png",
      },
  ]);
  return(
  
    <div className="app-container">
      <main>
      <div className="logo">
            <img src= {logo} alt="Logo" />
          </div>
      <h1 className="app-title">🎬 Movie List</h1>
      </main>
      <body>
      <MovieList movies={movies} />
      </body>
      <footer>
      <div className="container__footer">
        <div className="box__footer">
          <div className="logo">
            <img src= {logo} alt="Logo" />
          </div>
          <div className="terms">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              impedit cum cumque velit libero officiis quam doloremque
              reprehenderit quae corporis! Delectus architecto officia
              praesentium atque laudantium, nam deleniti sapiente deserunt.
            </p>
          </div>
        </div>
        <div className="box__footer">
          <h2>Soluciones</h2>
          <a href="https://www.google.com">App Desarrollo</a>
          <a href="#">App Marketing</a>
          <a href="#">IOS Desarrollo</a>
          <a href="#">Android Desarrollo</a>
        </div>
        <div className="box__footer">
          <h2>Compañia</h2>
          <a href="#">Acerca de</a>
          <a href="#">Trabajos</a>
          <a href="#">Procesos</a>
          <a href="#">Servicios</a>
        </div>
        <div className="box__footer">
          <h2>Redes Sociales</h2>
          <button
            aria-label="Iniciar sesión con Facebook"
            onClick={() => window.location.href='https://www.facebook.com'}
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            aria-label="Iniciar sesión con Gmail"
            onClick={() => window.location.href='https://mail.google.com'}
          >
            <i className="fab fa-google" />
          </button>
          <button
            aria-label="Iniciar sesión con Twitter"
            onClick={() => window.location.href='https://www.twitter.com'}
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            aria-label="Iniciar sesión con Instagram"
            onClick={() => window.location.href='https://www.instagram.com'}
          >
            <i className="fab fa-instagram" />
          </button>
          <button
            aria-label="Iniciar sesión con GitHub"
            onClick={() => window.location.href='https://www.github.com'}
          >
            <i className="fab fa-github" />
          </button>

        </div>
      </div>
      <div className="box__copyright">
        <hr />
        <p>
          Todos los derechos reservados © 2024 <b>Movie</b>
        </p>
      </div>
    </footer>
    </div>
    
  );
};

export default App;