import React from 'react'
class MyComp extends React.Component{
    state = { videoSrc: null }
    
    componentDidMount(){
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
      }
    }
    handleVideo(stream) {
      // Update the state, triggering the component to re-render with the correct stream
      
      this.setState({ videoSrc: window.URL.createObjectURL(stream) });
    }
    videoError() {
  
    }
    render() {
      return <div>
        <video src={this.state.videoSrc} autoPlay={true} />
      </div>;
      }
  }

  export default MyComp 