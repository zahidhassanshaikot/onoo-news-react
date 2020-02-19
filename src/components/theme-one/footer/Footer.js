import React, {Component} from 'react';
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTop from "./footer-top/FooterTop";

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer footer-style-1">
                    <FooterTop/>
                    <FooterBottom/>

                </div>
            </>
        );
    }
}

export default Footer;