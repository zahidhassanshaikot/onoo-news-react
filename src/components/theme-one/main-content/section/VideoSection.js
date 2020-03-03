import React, {Component} from 'react';
import DetailsVideoPost from "../../post/DetailsVideoPost";
import VideoStyle350X212 from "../../post/VideoStyle350x212";

class VideoSection extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content mt-3">
                        <div className="section-title">
                            <h1>Video</h1>
                        </div>
                        <DetailsVideoPost/>

                        <div className="row text-center">
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                            <div className="col-lg-6">
                                <VideoStyle350X212/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default VideoSection;