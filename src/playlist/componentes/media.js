import React, { Component }from 'react';
import PropTypes from 'prop-types';

import './media.css';

class Media extends Component {

  render(){
    return(
    <div className="Media">
       <div>
         <img
           src={this.props.image}
           alt="soy tata"
           width={260}
           height={160}
         />
       </div>
       <h3 className="Media-title">{this.props.title}</h3>
       <p>La tata quiere pero se sienta a no hacer nada</p>
       <p className="Media-author">{this.props.autor}</p>
       <button className= "button">Dale bitcoins a Tata</button>
    </div>
    )
  }
}
Media.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string,
  author:PropTypes.string,
}

export default Media;