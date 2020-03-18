import React, {Component} from 'react';
import default_image from "../../../assets/images/default_image/730x400.png";
import moment from "moment";
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';
import {Link} from "react-router-dom";

class DetailsVideoPost extends Component {
    render() {
        let news=this.props.news;
        console.log(news);
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <img
                                className="img-fluid"
                                src={ news.image ? news.image.big_image_two : default_image}
                                alt="post_image"
                            />
                        </div>
                        <div className="video-icon">
                            <a className="sg-popup" href="https://www.youtube.com/watch?v=AI3pORAXU4g"><i
                                className="fa fa-play" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="entry-content p-4">
                        <h3 className="entry-title">
                            {news.title}
                        </h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                {/*<li>By <Link to={"/author/"+news.user.id}>{news.user.last_name}</Link></li>*/}
                                {/*<li><Link href="#">{moment(news.created_at).format('MMM DD, YYYY')}</Link></li>*/}
                            </ul>
                        </div>
                        <p className="paragraph">
                            <Truncate lines={3} ellipsis={<span>..... </span>}>
                                {ReactHtmlParser(ReactHtmlParser(news.content))}
                            </Truncate>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default DetailsVideoPost;