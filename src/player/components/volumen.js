import React from 'React';
import VolumenIcon from '../../icons/components/volumen-Icon';
import './volumen.css';

function Volumen(props) {
	return(
		<button
		  className="Volumen">
			<div>
			  <VolumenIcon 
			  color="white"
			  size={25}
			  />
			  <div className="Volumen-range">
			    <input 
			    type="range"
			    min={0}
			    max={1}
			    step={.05}
			    onChange={props.handleVolumeChange}
			    />
			  </div>
			</div>
		</button>
		)
}

export default Volumen;