import React from 'react'
import './Webcam.css'

class Webcam extends React.Component{

    state = {videoSrc : null, labelSrc : "On Waiting"}
    
    
    

    async getWebcam(){
        
        console.log("Empezando a ver la cosa");
        let streamFunc=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}})
        console.log(streamFunc);
        // this.state.videoSrc=streamFunc
        this.setState({videoSrc : streamFunc})
        console.log(this.state.videoSrc);
        // console.log(this.state.videoSrc);
        let video=document.getElementById("StreamContainer")
        console.log("Ya cargado el stream");
        video.srcObject=streamFunc

        this.setState({labelSrc:"On Streaming"})

    }
    async getFrontWebcam(){
        
        console.log("Empezando a ver la cosa");
        let streamFunc=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}})
        console.log(streamFunc);
        // this.state.videoSrc=streamFunc
        this.setState({videoSrc : streamFunc})
        console.log(this.state.videoSrc);
        // console.log(this.state.videoSrc);
        let video=document.getElementById("StreamContainer")
        console.log("Ya cargado el stream");
        video.srcObject=streamFunc

        this.setState({labelSrc:"On Streaming"})

    }
    takePicture(){
        console.log("Taking a Picture")
        let video=document.getElementById("StreamContainer")
        let canvas=document.getElementById("Canvas")
        canvas.height="510"
        canvas.width="680"
        let context= canvas.getContext('2d')
        context.drawImage(video,0,0,"680","510")
        
    }

    async handleVideo(stream){
        this.setState({videoSrc: window.URL.createObjectURL(stream)})
        const video=document.getElementsByClassName("StreamContainer")
        console.log("Starting to Get video");
        await video.play()
        console.log("Now Playing")

    }
    render(){
        return <div className="VideoContainer">
            <div className="VideoContainer" id ="VideoContainer">
                <div className="modelOut">
                    <span>Status: </span>
                    <span className="VideoStatus">{this.state.labelSrc}</span>
                </div>
                <video id="StreamContainer" className="StreamContainer" autoPlay={true} width="680px" height="510" playsInline={true}></video>
                <div className="ButtonDiv">
                    <button onClick={this.getWebcam.bind(this)}>Click for Stream</button>
                    <button onClick={this.getFrontWebcam.bind(this)}>Change Camera</button>
                    <button onClick={this.takePicture}>Click for take a Pic</button>
                </div>
                
                <canvas id="Canvas"></canvas>
            </div>
            

        </div>
    }
}
export default Webcam;