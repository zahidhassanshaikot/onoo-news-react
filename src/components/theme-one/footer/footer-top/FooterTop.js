import React, {Component} from 'react';
import StyleFour350X82 from "../../post/StyleFour350x82";

class FooterTop extends Component {
    render() {
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-widget">
                                        <h3>Popular posts</h3>
                                        <StyleFour350X82/>
                                        <StyleFour350X82/>
                                        <StyleFour350X82/>
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
                                        <h3>Categories</h3>
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

export default FooterTop;