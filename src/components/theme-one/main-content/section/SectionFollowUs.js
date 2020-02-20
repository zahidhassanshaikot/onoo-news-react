import React, {Component} from 'react';

class SectionFollowUs extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content py-5">
                        <div className="section-title">
                            <h1>Follow us</h1>
                        </div>
                        <div className="sg-socail">
                            <ul className="global-list">
                                <li><a href="#"><span><i className="fa fa-facebook"
                                                         aria-hidden="true"></i></span>Facebook</a>
                                </li>
                                <li><a href="#"><span><i className="fa fa-youtube-play"
                                                         aria-hidden="true"></i></span>Youtube</a>
                                </li>
                                <li><a href="#"><span><i className="fa fa-twitter"
                                                         aria-hidden="true"></i></span>Twitter</a>
                                </li>
                                <li><a href="#"><span><i className="fa fa-linkedin"
                                                         aria-hidden="true"></i></span>Linkedin</a>
                                </li>
                                <li><a href="#"><span><i className="fa fa-pinterest-square"
                                                         aria-hidden="true"></i></span>Pinterest</a>
                                </li>
                                <li><a href="#"><span><i className="fa fa-skype"
                                                         aria-hidden="true"></i></span>Skype</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionFollowUs;