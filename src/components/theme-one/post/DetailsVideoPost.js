import React, {Component} from 'react';

class DetailsVideoPost extends Component {
    render() {
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <img
                                className="img-fluid"
                                src={ require("../../../assets/images/post/video-gallery.jpg") }
                                alt="Image"
                            />
                        </div>
                        <div className="video-icon">
                            <a className="sg-popup" href="https://www.youtube.com/watch?v=AI3pORAXU4g"><i
                                className="fa fa-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="entry-content p-4">
                        <h3 className="entry-title">Ran away farst score Through weakness of will, whichis the same as
                            saying through</h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                <li><i className="fa fa-calendar-minus-o" aria-hidden="true"></i><a href="#">November 4,
                                    2019</a></li>
                            </ul>
                        </div>
                        <p className="paragraph">There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or randomised words
                            which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing</p>
                    </div>
                </div>
            </>
        );
    }
}

export default DetailsVideoPost;