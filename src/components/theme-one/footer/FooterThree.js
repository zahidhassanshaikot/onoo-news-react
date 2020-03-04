import React, {Component} from 'react';
import FooterTopThree from "./footer-top/FooterTopThree";
import FooterBottomTwo from "./footer-bottom/FooterBottomTwo";

class FooterThree extends Component {
    render() {
        return (
            <>

                <div className="footer footer-style-1">
                    <FooterTopThree/>
                    <FooterBottomTwo/>

                </div>
            </>
        );
    }
}

export default FooterThree;