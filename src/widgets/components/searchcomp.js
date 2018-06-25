import React from 'react';
import './search.css'

// function Search(props) {
// 	return(

// 		)
// }

const Search = (props)=>(
	<form 
	className="search"
	onSubmit={props.handleSubmit}
	>
		<input 
		ref={props.setref}
		className="search-input" 
		type="text"
		placeholder="Search"
		onChange={props.handleChange}
		value={props.value}
		/>
	</form>
	)

export default Search;