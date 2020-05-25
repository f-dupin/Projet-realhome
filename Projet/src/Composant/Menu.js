import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../Image/logo.jpg';

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state =  {"leDisplay" : "d-none"}
    }
    
    change() {
        
        if (this.state.leDisplay === "d-none") {
            this.setState({"leDisplay" : "d-flex"});
        }
        else if (this.state.leDisplay === "d-flex") {
            this.setState({"leDisplay" : "d-none"});
        }
    }

    render() {
        return <header>
                    <div className="container-fluid">
                        <div className="row">
                        <div id="Logo" className="offset-1 col-lg-2">
                            <img className="leLogo" src={logo} alt="Logo du site"></img>
                            <div className="leMenu">
                                <FontAwesomeIcon onClick={() => this.change()} className="Menu d-lg-none" icon={faBars}/>
                            </div>
                        </div>
                            <div className={"col-lg-1 offset-lg-1 nav d-lg-flex "+this.state.leDisplay}>
                            <p>Home</p>
                            </div>
                            <div className={"col-lg-1 nav d-lg-flex "+this.state.leDisplay}>
                            <p>About Us</p>
                            </div>
                            <div className={"col-lg-1 nav d-lg-flex "+this.state.leDisplay}>
                            <p>Property</p>
                            </div>
                            <div className={"col-lg-1 nav d-lg-flex "+this.state.leDisplay}>
                            <p>Our Blog</p>
                            </div>
                            <div className={"col-lg-1 nav d-lg-flex "+this.state.leDisplay}>
                            <p>Contacts</p>
                            </div>
                            <div className={"col-lg-2 uneDiv d-lg-flex "+this.state.leDisplay}>
                            <div className="container-fluid">
                                <div id="Social" className="row">
                                <div className="col-3">
                                    <div className="iconn">
                                    <FontAwesomeIcon className="Reseau-sociaux" icon={faFacebookF}/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="iconn">
                                    <FontAwesomeIcon className="Reseau-sociaux" icon={faPinterestP}/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="iconn">
                                    <FontAwesomeIcon className="Reseau-sociaux" icon={faInstagram}/>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="iconn">
                                    <FontAwesomeIcon className="Reseau-sociaux" icon={faGooglePlusG}/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </header>
        
    }
}