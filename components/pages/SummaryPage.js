import React from "react";
import Slide from "../Slide";
import CameraShotDiv from "../CameraShotDiv";
import "../../stylesheets/pages/summaryStyle.scss";

class SummaryPage extends React.Component {
    render() {
        return (
            <Slide className="summary-page">
                <CameraShotDiv color={"#333333"}/>
                <div className="content">
                    <div className="title">Summary</div>
                    <div className="subtitle">A Fine Balance</div>
                    <div className="start-button">Start</div>
                </div>
            </Slide>
        )
    }
}

export default SummaryPage;