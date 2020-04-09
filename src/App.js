import React from 'react';
import './App.css';
import chicaConAudifonos from './img/chicaConAudifonos.jpg';
import computador from './img/computador.jpg';
import Landing from './img/landing-page.jpg';
import Tributo from './img/studio-ghibli.jpg';
import Formulario from './img/formulario.jpg';
import PagTecnica from './img/thelast.jpg';
import Team from './img/team.jpg';
import CV from './img/Andrea.jpg';
import Contacto from './img/contacto.jpg';
import Portafolio from './img/portafolio.jpg'
import Agile from './img-logo/agileInnova.png';
import Makaia from './img-logo/makaia.png';
import Comfama from './img-logo/comfama.png';
import Bcolombia from './img-logo/logo-bancolombia.png';
import 'bootswatch/dist/minty/bootstrap.min.css';

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }

      setStyle(newStyle);
  }, 1000);

  return(
  <div className="progress">
    <div className="progress-done" style={style}>
      {done}%
    </div>
  </div>
 )
}


const App = () => {
  return (
    <div className="App">


      <nav id="nav" className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary ">
        <div className="container ">
          <a className="navbar-brand" href="#">Andrea Clavijo Zuluaga website</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#informacion">Acerca de mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portafolio">Portafolio</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>



      <main id='main'>
        <div id="inicio" className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="main-content-left">
                <img className="d-block w-100" src={chicaConAudifonos} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-content-left">
                <h1 className=""><br />Bienvenidos a mi Portafolio</h1>
                <p className="mt-3">En este espacio te enseñare sobre los proyectos que he desarrollado como
              Front-End, como tambien les hablare un poco acerca de mi. <br /> <br /> Espero les grade el contenido de mi Sitio Web.</p>
                <a href="#" className="btn btn-outline-secondary mt-2">Portafolio</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="frase">
        <div className="container">
          <p className="h2 ">
            HABILIDADES
          </p>
        </div>
      </section>

      <section id="informacion">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="main-content-left">
                
                  <h4>HTML5</h4>
                  <Progress done="80"/>
                  <h4>CSS3</h4>
                  <Progress done="70"/>
                  <h4>JavaScript</h4>
                  <Progress done="50"/>         
                
              </div>
            </div>

            <div className="col-md-4">
              <div className="main-content-left">

                  <h4>React</h4>
                  <Progress done="40"/>
                  <h4>Bootstrap</h4>
                  <Progress done="60"/>
                  
              </div>
            </div>

            <div className="col-md-4">
              <div className="main-content-left">

                  <h4>Adobe PhotoShop</h4>
                  <Progress done="80"/>
                  <h4>AutoCad</h4>
                  <Progress done="50"/>
                
              </div>
            </div>        
          </div>

          <h2 className="mt-2">
            EXPERIENCIA PERSONAL
          </h2>

          <p id="info-rp">
            Soy desarrolladora Front-End, con enfoque en React, poseo conocimientos para elaborar y dar apoyo en procesos de desing thinking, me considero una persona hábil en el trabajo en equipo, además dinámica y con actitud constante por aprender.
          </p>

          <h2 className="mt-5">
            INFORMACION DE CONTACTO
          </h2>

          <p id="info-rp">
          Celular: +(57) 311 337 02 14<br/>
          Emai(1)l: andreacz96.acz@gmail.com<br/>
          Email(2): andreaclavijozuluaga96@gmail.com<br/>
          Residencia: Bello - Antioquia
          </p>


        </div>
      </section>




      <section id="frasej">
        <div className="container">
          <p className="h2 mb-2">
            Haz bien lo que esté en tus manos, el resto lo hará el destino.
          </p>
          <p className="h4">
            -Proverbio Japonés
          </p>
        </div>
      </section>

      

      <section id="">
        <div className="container mt-5">
          <div id="logos" className="row mt-5">

            <div className="col-md-3 col-sm-3">
              <div className="logo">
                <img className="d-block w-100" src={Agile} />
              </div>
            </div>

            <div className="col-md-3 col-sm-3">
              <div className="logo">
                <img className="d-block w-100" src={Makaia} />
              </div>
            </div>

            <div className="col-md-3 col-sm-3">
              <div className="logo">
                <img className="d-block w-100" src={Comfama} />
              </div>
            </div>

            <div className="col-md-3 col-sm-3">
              <div className="logo">
                <img className="d-block w-100" src={Bcolombia} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="frase">
        <div id="portafolio" className="container">
          <p className="h1 mb-2">
            PORTAFOLIO
          </p>
        </div>
      </section>

      <div >
        <div className="container">
          <div className="row mt-5">

            <div className="col-md-6">
              <div className="main-content-left">
                <img className="d-block w-100" src={Landing} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="main-content-left">
                <h1 className=""><br />Landing Page</h1>
                <p id="info-rp" className="mt-2">Para realizar esta página Web utilice HTML y CSS,no he utilizado otras librerías no FrameWorks, el diseño es un poco simple, se enfoca en tonos rosados y purpuras, resaltando la feminidad y el poder.<br /><br />

              Como se puede observar se ofrecen  servicios de asesoría, enseñanza y maquillaje para cualquier tipo de ocasión.</p>
                <a href="https://andreaclavijozuluaga.github.io/landingpage/" className="btn btn-outline-secondary mt-2">Ir a Landing Page</a>
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="main-content-left">
                <img className="d-block w-100" src={Tributo} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="main-content-left">
                <h1 className="mb-3 mt-5"><br />Página Tributo</h1>
                <p id="info-rp" className="mt-2">Esta fue mi primera página web, en teoría mi primer acercamiento a los lenguajes de etiqueta HTML y estilo CSS, sinceramente fue la más compleja de elaborar, tenía muchas dudas y no sabía como elaborarla muy bien, desde el primer momento que abri Visual Studio Code, mi cabeza estaba en blanco no sabía como empezar o que hacer, realmente tenía miedo, pero tome aire, y dije bueno hay que intentarlo y como ves lo intente, no fue el mejor resultado, pero aprendí muchas cosas mientras la elaboraba, mas de lo que aprendí con Free Code Camp. <br /><br />Esta página fue un reto, elegir los colores, las imágines a utilizar, yo queria plazmar algo pero no tenía la habilidad para hacer lo que exactamente queria, sentí muchas frustración porque a veces cambiaba algo en CSS y todo perdia su forma o se volvia loco, yo pense ¡WOW! y no de asombro, ¡WOW! de moriré hoy con esto.<br /><br />Esta página fue algo como aprender de todo lo que no debes hacer, porque hice todo lo que no debia hacer antes para depues hacer algo que me diera un resultado un poco parecido al que quería.<br /><br /></p>
                <a href="https://andreaclavijozuluaga.github.io/studio_ghibli/" className="btn btn-outline-secondary mt-2">Ir a Página Tributo</a>
              </div>
            </div>


            <div className="col-md-6 mt-5">
              <div className="main-content-left">
                <img className="d-block w-100" src={Formulario} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="main-content-left">
                <h1 className=""><br />Formulario</h1>
                <p id="info-rp" className="mt-2">Aquí elabaore un formulario, solo la parte visual aun no tiene validaciones o habilitada la opción para realizar el envio de la información.<br /><br />En esta página jugue con las opacidades, e utilice los contrastes de color verdososy naranjas, también cree un :hover: para ver el boton como si tuviera interacción.</p>
                <a href="https://andreaclavijozuluaga.github.io/portafolio96/" className="btn btn-outline-secondary mt-2">Ir a Formulario</a>
              </div>
            </div>


            <div className="col-md-6 mt-5">
              <div className="main-content-left">
                <img className="d-block w-100" src={PagTecnica} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="main-content-left">
                <h1 className=""><br />Página Técnica</h1>
                <p id="info-rp" className="mt-2">Esta página fue con la que mas emoción senti, porque amo los video juegos y amo esta serie The Last Of Us, intente asemejar el diseño de colores y contrastes que normalmente se usa por parte de los desarrolladores de Naughty Dog, la verdad se me fue el tiempo y no me di cuenta, cuanto pense "Ok, ya la puedo dejar así", estaba un poco triste, porque puedo mejorarla más, estoy estudiando más CSS para mejorar encuanto a la animación, sinceramente soy fánatica de CSS, es complejo pero siento tengo el control.</p>
                <a href="https://andreaclavijozuluaga.github.io/pagina-tecnica-thelast/" className="btn btn-outline-secondary mt-2">Ir a Landing Página Técnica</a>
              </div>
            </div>



            <div className="col-md-6 mt-5 mb-5">
              <div className="main-content-left">
                <img className="d-block w-100" src={Team} />
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="main-content-left">
                <h1 className=""><br />Team Front-End</h1>
                <p id="info-rp" className="mt-2">Página elaborada en grupo, tomando unas bases y párametros y establecidos para ser elaborada.</p>
                <a href="https://dinareales.github.io/front2_TeamFrontend/" className="btn btn-outline-secondary mt-5">Ir a Team Front-End</a>
              </div>
            </div>

            <div className="col-md-6 mt-5 mb-5">
              <div className="main-content-left">
                <img className="d-block w-100" src={Portafolio} />
              </div>
            </div>

            <div className="col-md-6 mt-5">
              <div className="main-content-left">
                <h1 className=""><br />Portafolio</h1>
                <p id="info-rp" className="mt-2">Este es mi primer portafolio elaborado con HTML, CSS y muchas Media Query Para que fuera un poco responsive.</p>
                <a href="https://andreaclavijozuluaga.github.io/portafolio96/index.html" className="btn btn-outline-secondary mt-5">Ir a Portafolio</a>
              </div>
            </div>



          </div>
        </div>
      </div>

      <section id="frase">
        <div id="contacto" className="container">
          <p className="h1 mb-2">
            ACERCA DE MI
          </p>
        </div>
      </section>

      <section id="ainformacion">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="main-content-left">
                <img className="d-block w-100" src={computador} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-content-left">
              
                <p id="info-rp" className="mt-3">Actualmente soy estudiante de Frond-End en Academia Geek, <strong>Academia GEEK</strong> es una alianza de <strong>Makaia</strong>, <strong>Agile Innova</strong>, y cuentan con la colaboracion de otras empresas como Bancolombia, Comfama, y otras entidades, en <strong>Academia Geek </strong> es para aquellos estudiantes que quieran incursionar en el mundo de la tecnología ya sea como desarrollador Back-end o Front-end, desarrolando habilidades en programación, cabe resaltar Estoy realmente agradecida con <strong>Academia Geek</strong>por todo lo que he aprendido durante este corto tiempo que hemos compartido, mis mejores deseos para su equipo de trabajo.<br /><br />

              Anteiormente he desempeñado actividades en el área del diseño y la estética, <em>"Las matemáticas son fáciles; el diseño es difícil -Jefrey Veen"</em>, He deesarrollado habilidades blandas como en la toma de decisiones, la solucion del conflictos, trabajo en equipo, comunicación, como también del ser y hacer.<br />
                </p>
                {/* <a href="#" className="btn btn-outline-secondary mt-2">Portafolio</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section id="frase">
        <div id="contacto" className="container">
          <p className="h1 mb-2">
            CONTACTO
          </p>
        </div>
      </section>
  

      <section id="informacion">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="main-content-left">
                <img className="d-block w-100" src={Contacto} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-content-left">

                <form className="mb-5">

                  <div className="form-group">
                    <label htmlFor="nya" className="negrita">Nombres y Apellidos</label>
                    <input type="text" className="form-control" id="nya" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="negrita">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto" className="negrita">Asunto</label>
                    <input type="text" className="form-control" id="asunto" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje" className="negrita">Mensaje</label>
                    <textarea className="form-control" id="mensaje" required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Solicitar datos de Contacto</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      

      <section id='frase'>
        <footer className="container">
          <p>&copy; {(new Date().getFullYear())} Andrea Clavijo Zuluaga | Portafolio Web.</p>
        </footer>
      </section>


    </div >
  );
}

export default App;
