import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";
import default_image from '../../../assets/images/default_image/240x160.png';

class StyleThree160X181 extends Component {
    render() {
        let news = this.props.news;
        return (
            <Fragment>
                <div className="sg-post small-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to={"/details/"+news.slug}>
                                <img className="img-fluid"
                                     src={ news.image ? news.image.small_image : default_image}
                                     alt="post_image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>{news.title}</p>
                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <Link to="/details/slug">{moment(news.created_at).format('MMM DD, YYYY')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StyleThree160X181;