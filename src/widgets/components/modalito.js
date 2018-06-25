import React from 'react';
import './modalito.css';

function Modal(props) {
	return(
		<div className="Modal">
		<div className="Descargar">
			<li>Reproducir</li> 
			<li>Descargar</li>
		</div>
		{props.children}
		<button className="buttonModal" 
		onClick={props.handleClick}
		className="Modal-close"
		>
		</button>
		</div>
		)
}

export default Modal;