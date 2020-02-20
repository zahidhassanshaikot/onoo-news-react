import React, {Component} from 'react';
import StyleEight350X212 from "../../post/StyleEight350x212";
import VideoStyle350X212 from "../../post/VideoStyle350x212";

class SectionSeven extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>Related post</h1>
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                            <div className="col-lg-6">
                                <StyleEight350X212/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionSeven;