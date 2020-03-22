import React, {Component} from 'react';
import default_image from "../../../assets/images/default_image/240x160.png";
import Truncate from "react-truncate";
import {Link} from "react-router-dom";

class StyleEleven207X202 extends Component {
    render() {
        let news = this.props.news;
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to={"/details/"+news.slug}>
                                <img
                                    className="img-fluid"
                                    src={ news.image ? news.image.small_image : default_image}
                                    alt="post_image"
                                />
                            </Link>
                        </div>
                        <div className="category">
                            <ul className="global-list">
                                <li><a href="#">{news.category.category_name}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry-content">

                        <p>
                            <Truncate lines={2} ellipsis={<span>..... </span>}>
                                {news.title}
                            </Truncate>
                            </p>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleEleven207X202;