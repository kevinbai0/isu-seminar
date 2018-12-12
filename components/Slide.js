import React from "react";
import "../stylesheets/slide.scss";
import CustomHead from "./CustomHead";

class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {className} = this.props;
        return <div className={className ? "slide " + className : "slide"} onClick={() => this.props.onClick && this.props.onClick()}>
            <CustomHead />
            {this.props.children}
        </div>
    }
}

export default Slide;