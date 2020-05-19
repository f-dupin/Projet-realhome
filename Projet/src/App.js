import React from 'react';
import './App.scss';
import Bureau from './Image/Bureau.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight , faGlobeAmericas , faBriefcase , faImages , faArchive} from '@fortawesome/free-solid-svg-icons';
import {Article} from './Composant/article.js'
import {Vignette} from './Composant/Vignette_Team.js'
import {Menu} from './Composant/Menu.js'
import {Footer} from './Composant/footer.js'
import team1 from './Image/team1.jpg'
import team2 from './Image/team2.jpg'
import team3 from './Image/team3.jpg'
import team4 from './Image/team4.jpg'

function App() {
  return (
    <div className="App">

      <Menu></Menu>

      <div className="container-fluid section1">
        <div className="row">
          <div id="Fil-arrianne" className="col-sm-10 offset-1">
            <p><span> <span>Home </span><FontAwesomeIcon icon={faLongArrowAltRight}/> </span>About Us</p>
          </div>
        </div>
        <div className="row">
          <div id="Titre" className="col-sm-10 offset-1">
            <h1><span>About</span> Our Company</h1>
          </div>
        </div>
        <div className="row Texte">
          <div className="col-lg-5 offset-lg-1">
            <img src={Bureau} alt="C'est un bureau"></img>
          </div>
          <div className="col-lg-5">
            <p>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr.</p>
            <p>Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid section2">
        <div className="row">
          <div className="col-sm-10 offset-1">
            <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <Article IconArticle={<FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>} TitreArticle="Whole World" TexteArticle="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></Article>
              </div>
              <div className="col-lg-3">
                <Article IconArticle={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>} TitreArticle="Confidentially" TexteArticle="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></Article>
              </div>
              <div className="col-lg-3">
                <Article IconArticle={<FontAwesomeIcon icon={faImages}></FontAwesomeIcon>} TitreArticle="Good Previews" TexteArticle="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></Article>
              </div>
              <div className="col-lg-3">
                <Article IconArticle={<FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>} TitreArticle="Confidentially" TexteArticle="Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor."></Article>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section3">
        <div className="row OurTeam">
          <div className="col-md-5 offset-lg-1">
            <h1><span>Our</span> Team</h1>
          </div>
          <div className="col-md-5">
            <p>Want to be a part of this team?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-1">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 vignette">
                  <Vignette image={team1} Nom="Maria Spilberg" Poste="Manager"></Vignette>
                </div>
                <div className="col-lg-3 vignette">
                  <Vignette image={team2} Nom="Stan Barnard" Poste="Agent"></Vignette>
                </div>
                <div className="col-lg-3 vignette">
                  <Vignette image={team3} Nom="Phillip Morris" Poste="Agent"></Vignette>
                </div>
                <div className="col-lg-3 vignette">
                  <Vignette image={team4} Nom="Andy Zuckerberg" Poste="Account Manager"></Vignette>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid NewsLatter">
        <div className="row padding">
          <div className="col-lg-5 offset-1">
            <h1><span>Subscribe To</span> Our Newsletter</h1>
          </div>
          <div className="col-lg-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input placeholder="Your email..."></input>
                </div>
                <div className="col-3">
                  <button> Subscribe </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
