import React, {Component} from 'react';
import default_image from "../../../assets/images/default_image/240x160.png";
import {Link} from "react-router-dom";
import Truncate from "react-truncate";
import moment from "moment";

class StyleFour350X82 extends Component {
    render() {
        let news = this.props.news;
        return (
            <>
                <div className="sg-post small-post post-style-1">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link  to={"/details/"+news.slug}>
                                <img className="img-fluid"
                                     // src={ default_image}
                                     src={ news.image ? news.image.small_image : default_image}
                                     alt="post_image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content">

                            <Truncate
                                lines={1}
                                ellipsis={<span>..... </span>}
                            >
                                <p>{news.title}</p>
                            </Truncate>

                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleFour350X82;