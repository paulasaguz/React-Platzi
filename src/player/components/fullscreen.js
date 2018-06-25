import React from 'React';
import FullscreenIcon from '../../icons/components/full-screen-icon';
import './full-screen.css';

const FullScreen = (props) => (
	<div 
	className="Fullscreen"
	onClick={props.handleFullScreenClick}
	>
     <FullscreenIcon
	     size={25}
	     color="white"
     />
	</div>
	)

export default FullScreen;