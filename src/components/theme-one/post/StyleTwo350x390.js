import React, {Component} from 'react';
import {Link} from "react-router-dom";
import default_image from '../../../assets/images/default_image/460x350.png';
import moment from "moment";
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';

class StyleTwo350X390 extends Component {
    render() {
        let news = this.props.news;
        // let content=(ReactHtmlParser(news.content)).toString().replace(/<[^>]+>/g, '');
        // console.log(news);
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
                        </div>
                    </div>
                    <div className="entry-content">
                        <h3 className="entry-title">
                            <Link to={"/details/"+news.slug}>{news.title}</Link>
                        </h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                <li>By <Link to={"/author/"+news.user.id}>{news.user.last_name}</Link></li>
                                <li><Link href="#">{moment(news.created_at).format('MMM DD, YYYY')}</Link></li>
                            </ul>
                        </div>
                        <p>
                            <Truncate lines={2} ellipsis={<span>..... </span>}>
                                {
                                    ReactHtmlParser(ReactHtmlParser(news.content))
                                }
                            </Truncate>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleTwo350X390;