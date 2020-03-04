import React, {Component} from 'react';
import logo from '../../../../assets/images/logo.png'

class FooterBottomTwo extends Component {
    render() {
        return (
            <>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <div className="logo">
                            <img
                                src={logo}
                                // src="images/footer-logo.png"
                                alt="Logo"
                                className="img-fluid"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="sg-socail">
                                <ul className="global-list d-flex">
                                    <li className="facebook"><a href="#"><i className="fa fa-facebook"
                                                                            aria-hidden="true"></i></a></li>
                                    <li className="youtube"><a href="#"><i className="fa fa-youtube-play"
                                                                           aria-hidden="true"></i></a></li>
                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"
                                                                           aria-hidden="true"></i></a></li>
                                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"
                                                                            aria-hidden="true"></i></a></li>
                                    <li className="pinterest"><a href="#"><i className="fa fa-pinterest-square"
                                                                             aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <span>Copyright &copy; 2019 Varient - All Rights Reserved.</span>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterBottomTwo;