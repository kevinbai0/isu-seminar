import React from "react";
import "../CustomHead";
import Slide from "../Slide";
import "../../stylesheets/pages/landingStyle.scss";
import CameraShotDiv from "../CameraShotDiv";
import anime from "animejs";
import Router from "next/router";


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.LANDING_STATE = "Landing";
        this.PLAYING_VIDEO = "Video";
        this.FINISHED_VIDEO = "Finished";
        this.state = {
            currentState: this.LANDING_STATE
        }
        this.topHalfRef = React.createRef();
        this.bottomHalfRef = React.createRef();
        this.videoRef = React.createRef();
        this.titleRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.state.currentState === this.PLAYING_VIDEO){
             anime({
                targets: [this.topHalfRef.current, this.bottomHalfRef.current],
                duration: 2000,
                scaleY: 0,
                easing: "easeInOutQuad"
            })
            anime({
                targets: this.titleRef.current,
                duration: 1000,
                opacity: 0,
                easing: "easeInOutCubic",
                delay: 3000,
                complete: () => {
                    this.videoRef.current ? this.videoRef.current.className = "intro-video" : "";
                }
            })
        }
    }
    render() {
        return (
            <Slide className="landing-page" onClick={() => this.handleSlideClick()}>
                <video className="intro-video blurred" ref={this.videoRef}>
                    <source src="/static/english-video.mp4" type="video/mp4"/>
                </video>
                <CameraShotDiv />
                <div className="top-half" ref={this.topHalfRef}></div>
                <div className="bottom-half" ref={this.bottomHalfRef}></div>
                <div className="title-border" ref={this.titleRef}>
                    <div className="title">Villains</div>
                </div>
            </Slide>
        )
    }

    handleSlideClick() {
        if (this.state.currentState == this.LANDING_STATE) {
            // expand video
            this.setState({
                currentState: this.PLAYING_VIDEO
            },() => {
                this.videoRef.current.play();
            })
        }
        else {
            // change slide to next
            Router.push("/slide1");
        }
    }
}

export default LandingPage;