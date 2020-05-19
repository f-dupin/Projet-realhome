import React , {Component} from 'react';


export class Vignette extends Component {
    render() {
        return  <div className="container-fluid vignetta">
                    <div className="row">
                        <img src={this.props.image} alt="Personnel de l'entreprise"></img>
                    </div>
                    <div className="row">
                        <h3>{this.props.Nom}</h3>
                        <p>{this.props.Poste}</p>
                    </div>
                </div>
    }
}