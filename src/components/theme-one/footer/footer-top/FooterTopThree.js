import React, {Component} from 'react';
import StyleFour350X82 from "../../post/StyleFour350x82";

class FooterTopThree extends Component {
    render() {
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-widget about-widget">
                                        <h3>ABOUT US</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text since
                                            has five...</p>
                                        <ul className="global-list">
                                            <li><i className="fa fa-home mr-2" aria-hidden="true"></i> 15 Cliff St,
                                                New York NY 10038, USA
                                            </li>
                                            <li><i className="fa fa-volume-control-phone mr-2"
                                                   aria-hidden="true"></i> 91 234 567 8765
                                            </li>
                                            <li><i className="fa fa-envelope-o mr-2" aria-hidden="true"></i> <a
                                                href="#">info@hmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-widget">
                                        <h3>EDITOR PICKS</h3>
                                        <StyleFour350X82/>
                                        <StyleFour350X82/>
                                        <StyleFour350X82/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-widget categories-widget">
                                        <h3>POPULAR CATEGORIES</h3>
                                        <ul className="global-list">
                                            <li><a href="#">Business <span>(145)</span></a></li>
                                            <li><a href="#">Design <span>(20)</span></a></li>
                                            <li><a href="#">Fashion <span>(15)</span></a></li>
                                            <li><a href="#">Food & Drinks <span>(12)</span></a></li>
                                            <li><a href="#">Head Phone <span>(56)</span></a></li>
                                            <li><a href="#">Interior <span>(652)</span></a></li>
                                            <li><a href="#">Laptop <span>(05)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterTopThree;