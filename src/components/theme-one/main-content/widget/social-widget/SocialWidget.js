import React, {Component} from 'react';

class SocialWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget widget-social">
                    <h3 className="widget-title">Stay connected</h3>

                    <div className="sg-socail">
                        <ul className="global-list">
                            <li className="facebook">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </span>Facebook
                                </a>
                            </li>
                            <li className="youtube">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    </span>Youtube
                                </a>
                            </li>
                            <li className="twitter">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </span>Twitter
                                </a>
                            </li>
                            <li className="linkedin">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </span>Linkedin
                                </a>
                            </li>
                            <li className="pinterest">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                                    </span>Pinterest
                                </a>
                            </li>
                            <li className="skype">
                                <a href="#">
                                    <span>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                    </span>Skype
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default SocialWidget;