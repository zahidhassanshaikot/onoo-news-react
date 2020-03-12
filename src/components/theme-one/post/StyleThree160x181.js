import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import moment from "moment";

class StyleThree160X181 extends Component {
    render() {
        // let created_at=this.props.created_at:moment().format('dddd, DD MMMM YYYY')
        return (
            <Fragment>
                <div className="sg-post small-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <Link to="/details/slug">
                                <img className="img-fluid"
                                     src={ this.props.image.small_image }
                                     alt="Image"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="entry-content">
                        <p>{this.props.title}</p>
                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <Link to="/details/slug">{moment(this.props.created_at).format('MMM DD, YYYY')}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StyleThree160X181;