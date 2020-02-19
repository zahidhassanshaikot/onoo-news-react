import React, {Component} from 'react';
import Slider from "./slider/Slider";
import StyleOne255X237 from "../post/StyleOne255x237";


class TopSection extends Component {
    render() {
        return (
            <>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Slider/>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <StyleOne255X237/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleOne255X237/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleOne255X237/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleOne255X237/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSection;