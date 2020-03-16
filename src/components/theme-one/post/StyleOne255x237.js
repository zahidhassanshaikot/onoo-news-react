import React, {Component} from 'react';
import {Link} from "react-router-dom";
import default_image from '../../../assets/images/default_image/258x215.png';

class StyleOne255X237 extends Component {
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
                                <li><a href="#">Technology</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>Greta Thunberg let Leonardo DiCaprio take an Instagram</p>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleOne255X237;