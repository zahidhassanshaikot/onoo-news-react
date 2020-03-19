import React, {Component} from 'react';
import default_image from '../../../assets/images/default_image/358x215.png';
import moment from "moment";
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';
import {Link} from "react-router-dom";


class VideoStyle350X212 extends Component {
    render() {
        let news = this.props.news;
        return (
            <>
                <div className="sg-post post-style-2">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to={"/details/"+news.slug}>
                                <img
                                    className="img-fluid"
                                    src={ news.image ? news.image.medium_image : default_image}
                                    alt="post_image"
                                />
                                </Link>
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
                        <h3 className="entry-title">
                            <Link to={"/details/"+news.slug}>
                                <Truncate lines={1} ellipsis={<span>..... </span>}>
                                    {news.title}
                                </Truncate>
                            </Link>
                        </h3>
                        <p>
                            <Truncate lines={1} ellipsis={<span>..... </span>}>
                                {ReactHtmlParser(ReactHtmlParser(news.content))}
                            </Truncate>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default VideoStyle350X212;