import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-files';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen';
import FullScreen from '../components/fullscreen';

class VideoPlayer extends Component {
	state={
		pause:true,
		duration: 0,
		currentTime:0,
		loading:false,
	}
	togglePlay= (event) =>{
		this.setState({
			pause:!this.state.pause
		})
	}
	componentDidMount(){
	  this.setState({
	  	pause: (!this.props.autoplay)
	  })
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		});
	}
	handleTimeUpdate = event =>{
		this.setState({
			currentTime:this.video.currentTime
		})
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}
	handleSeeking = event => {
		this.setState({
		  loading:true
		})
	}
	handleSeeked = event => {
		this.setState({
		  loading:false
		})
	}
	handleVolumeChange = event => {
		this.video.volume = event.target.value
	}
	handleFullScreenClick = event =>{
	  if (!document.webkitIsFullScreen){
	    this.player.webkitRequestFullscreen()
	  }
	  else{
	  	document.webkitExitFullscreen()
	  	// salgo de fullscreen
	  }
	}
	setRef = element => {
		this.player=element
	}
	render(){
	  return(
	    <VideoPlayerLayout
	      setRef={this.setRef}
	    >
		    <Title 
			  title={this.props.title}
		    />
		    
		    <Controls>
			    <Timer 
				  duration={this.state.duration}
				  currentTime={this.state.currentTime}
			    />
			    <PlayPause 
			      pause={this.state.pause}
			      handleClick={this.togglePlay}
			    />
			    <ProgressBar
				  duration={this.state.duration}
				  value={this.state.currentTime}
				  handleProgressChange={this.handleProgressChange}
			    />
			    <Volumen
			      handleVolumeChange={this.handleVolumeChange}
			    />
			    <FullScreen
			    handleFullScreenClick={this.handleFullScreenClick}
			    />
		    </Controls>
			<Spinner
			  active={this.state.loading}
			/>
			<Video 
			  autoPlay={this.props.autoplay}
			  pause ={this.state.pause}
			  src={this.props.src}
			  handleLoadedMetadata={this.handleLoadedMetadata}
			  handleTimeUpdate={this.handleTimeUpdate}
			  handleSeeking={this.handleSeeking}
			  handleSeeked={this.handleSeeked}
			/>
	    </VideoPlayerLayout>
	  	)
	}
}

export default VideoPlayer;