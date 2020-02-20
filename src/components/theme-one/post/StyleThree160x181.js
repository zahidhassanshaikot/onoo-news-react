import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class StyleThree160X181 extends Component {
    render() {
        return (
            <Fragment>
                <div className="sg-post small-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to="/details/slug">
                                <img className="img-fluid"
                                     src={ require("../../../assets/images/post/mid6.jpg") }
                                     alt="Image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>Trump's Florida move get ripped on 'SNL</p>
                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <Link to="/details/slug">May 4, 2019</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StyleThree160X181;