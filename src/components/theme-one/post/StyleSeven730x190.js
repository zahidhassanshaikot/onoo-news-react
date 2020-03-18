import React, {Component} from 'react';
import default_image from '../../../assets/images/default_image/350x190.png';
import Truncate from "react-truncate";
import {Link} from "react-router-dom";
import moment from "moment";
import ReactHtmlParser from 'react-html-parser';

class StyleSeven730x190 extends Component {
    render() {
        let news=this.props.news;

        return (
            <>
                <div className="sg-post medium-post-style-1">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to={"/details/"+news.slug}>
                                <img className="img-fluid"
                                     src={ news.image ? news.image.medium_image_two : default_image}
                                     alt="post_image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content align-self-center">
                        <h3 className="entry-title">
                            <Link to={"/details/"+news.slug}>
                                <Truncate lines={2} ellipsis={<span>..... </span>}>
                                    {news.title}
                                </Truncate>
                            </Link>
                        </h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                <li>By <Link to={"/author/"+news.user.id}>{news.user.last_name}</Link></li>
                                <li><Link href="#">{moment(news.created_at).format('MMM DD, YYYY')}</Link></li>
                            </ul>
                        </div>
                        <p>
                            <Truncate lines={2} ellipsis={<span>..... </span>}>
                            {ReactHtmlParser(ReactHtmlParser(news.content))}
                        </Truncate>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleSeven730x190;