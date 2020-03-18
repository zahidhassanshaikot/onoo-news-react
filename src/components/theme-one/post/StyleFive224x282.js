import React, {Component} from 'react';
import {Link} from "react-router-dom";
import default_image from "../../../assets/images/default_image/460x350.png";
import moment from "moment";
import Truncate from "react-truncate";

class StyleFive224X282 extends Component {
    render() {
        let news = this.props.news;
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to={"/details/"+news.slug}>
                                <img className="img-fluid"
                                     src={ news.image ? news.image.medium_image_three : default_image}
                                     alt="post_image"
                                />
                            </Link>
                            <div className="category">
                                <ul className="global-list">
                                    <li><a href="#">{news.category.category_name}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>
                            <Truncate lines={2} ellipsis={<span>..... </span>}>
                                {news.title}
                            </Truncate>
                        </p>
                        <div className="entry-meta mt-2">
                            <ul className="global-list">
                                <li><a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleFive224X282;