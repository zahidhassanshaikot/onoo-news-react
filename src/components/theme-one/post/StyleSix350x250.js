import React, {Component} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";
import default_image from '../../../assets/images/default_image/460x350.png';

class StyleSix350X250 extends Component {
    render() {
        let news=this.props.news;
        return (
            <>
                <div className="sg-post featured-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <a href="details.html">
                                <img className="img-fluid"
                                     src={ news.image ? news.image.medium_image_three : default_image}
                                     alt="post_image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="entry-content absolute">
                        <div className="category">
                            <ul className="global-list">
                                <li><a href="#">{news.category.category_name}</a></li>
                            </ul>
                        </div>
                        <h2 className="entry-title">
                            <Link to={"/details/"+news.slug}>
                                {news.title}
                            </Link>
                        </h2>
                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <a href="#">{news.user.first_name}</a></li>
                                <li><a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleSix350X250;