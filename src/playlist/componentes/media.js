import React, { PureComponent }from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  state = {
    author:'Paula'
  }
  handleClick = (event) =>{
    this.props.openModal(this.props);
  //   this.setState({
  //     author:'La tata'
  //   })
  }
  render(){
     const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return(
    <div className="Media"onClick={this.handleClick}>
       <div className="Media-cover">
         <img
           src={this.props.cover}
           alt="soy tata"
           width={260}
           height={160}
         />
       </div>
         <h3 className="Media-title">{this.props.title}</h3>
         <p className="Media-author">{this.props.author}</p>
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