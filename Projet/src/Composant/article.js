import React , {Component} from 'react';



export class Article extends Component {
    render() {
        return  <div className="Container-fluid Article">
                    <div className="row IconArticle">
                        {this.props.IconArticle}
                    </div>
                    <div className="row">
                        <h2> {this.props.TitreArticle} </h2>
                    </div>
                    <div className="row">
                        <p> {this.props.TexteArticle} </p>
                    </div>
                </div>
            
        
    }
}



