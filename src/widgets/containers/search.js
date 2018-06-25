import React, { Component } from 'react';
import Search from '../Components/searchcomp';

class SearchContainer extends Component {
	state = {
		value:'luis'
	}
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value,'submit')
	}
  setInputRef = element =>{
  	this.input=element;
  }
  handleInputChange = event =>{
  	this.setState({
  		value:event.target.value.replace(' ', '-')
  	})
  }
  render (){
	return(
		<Search 
		  setref={this.setInputRef}
		  handleSubmit={this.handleSubmit}
		  handleChange={this.handleInputChange}
		  value={this.state.value}
		  />
		)
	}
}

export default SearchContainer;
