import React, {Component} from 'react';
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTopTwo from "./footer-top/FooterTopTwo";

class FooterTwo extends Component {
    render() {
        return (
            <>
                <div className="footer footer-style-1">
                    <FooterTopTwo/>
                    <FooterBottom/>
                </div>
            </>
        );
    }
}

export default FooterTwo;