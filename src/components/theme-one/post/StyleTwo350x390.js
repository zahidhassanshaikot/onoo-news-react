import React, {Component} from 'react';
import {Link} from "react-router-dom";

class StyleTwo350X390 extends Component {
    render() {
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <a href="details.html">
                                <img className="img-fluid"
                                     src={ require("../../../assets/images/post/6.jpg") }
                                     alt="post_image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="entry-content">
                        <h3 className="entry-title"><a href="#">Seafaring scientists
                            won't glimpse the sun for 150 days</a></h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                <li>By <Link to="/author/1">Mahananda</Link></li>
                                <li><a href="#">November 4, 2019</a></li>
                            </ul>
                        </div>
                        <p>In the heart of the central Arctic, scientists have
                            intentionally lodged their 387-foot-long and over
                            12,000-ton ship, Polarstern</p>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleTwo350X390;