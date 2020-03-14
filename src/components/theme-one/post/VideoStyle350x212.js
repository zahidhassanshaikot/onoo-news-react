import React, {Component} from 'react';

class VideoStyle350X212 extends Component {
    render() {
        return (
            <>
                <div className="sg-post post-style-2">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <a href="details.html">
                                <img
                                    className="img-fluid"
                                    src={ require("../../../assets/images/post/mid1.jpg") }
                                    alt="post_image"
                                />
                                </a>
                        </div>
                    </div>
                    <div className="entry-content">
                        <div className="video-icon">
                            <a
                                className="sg-popup"
                                href="https://www.youtube.com/watch?v=AI3pORAXU4g"><i
                                className="fa fa-play"
                                aria-hidden="true"></i>
                            </a>
                        </div>
                        <h3 className="entry-title"><a href="#">There are
                            big long time ago</a></h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available</p>
                    </div>
                </div>
            </>
        );
    }
}

export default VideoStyle350X212;