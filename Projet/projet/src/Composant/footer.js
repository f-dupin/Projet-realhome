import React , { Component } from "react";
import logo2 from '../Image/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


export class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-10 offset-1">
                                <div className="container-fluid">
                                    <div className="row marginFooter">
                                        <div className="col-lg-3">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-8">
                                                        <img className="imageFooter" src={logo2}></img>
                                                    </div>
                                                </div>
                                            
                                                <div className="row">
                                                    <div className="col-2">
                                                        <FontAwesomeIcon className="socialFooter" icon={faFacebookF}></FontAwesomeIcon>
                                                    </div>
                                                    <div className="col-2">
                                                        <FontAwesomeIcon className="socialFooter" icon={faPinterestP}></FontAwesomeIcon>
                                                    </div>
                                                    <div className="col-2">
                                                        <FontAwesomeIcon className="socialFooter" icon={faInstagram}></FontAwesomeIcon>
                                                    </div>
                                                    <div className="col-2">
                                                        <FontAwesomeIcon className="socialFooter" icon={faGooglePlusG}></FontAwesomeIcon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 textFooter">
                                            <h3>Naviguation</h3>
                                            <ul>
                                                <li>Home</li>
                                                <li>About Us</li>
                                                <li>Property</li>
                                                <li>Gallery</li>
                                                <li>Our Blog</li>
                                                <li>Contacts</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 textFooter">
                                            <h3>For Client</h3>
                                                <ul>
                                                    <li>Sign in</li>
                                                    <li>Forum</li>
                                                    <li>Promotions</li>
                                                    <li>News</li>
                                                </ul>
                                        </div>
                                        <div className="col-lg-3 textFooter">
                                            <h3>Contact us</h3>
                                            <p>240 Central Park, London OR 10019</p>

                                            <ul>
                                                <li>Freephone: +1 800 559 6580</li>
                                                <li>Telephone: +1 959 603 6035</li>
                                                <li>FAX: +1 800 559 6580</li>
                                            </ul>

                                            <a href="#">info@realhome.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    }
}