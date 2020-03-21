import React, {Component} from 'react';
import FooterTopThree from "./footer-top/FooterTopThree";
import FooterBottomTwo from "./footer-bottom/FooterBottomTwo";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class FooterThree extends Component {
    render() {
        let {branding, widgets, social_media} = this.props.settingContent;
        return (
            <>

                <div className="footer footer-style-1">
                    <FooterTopThree
                        widgets={widgets}
                        branding={branding}
                    />
                    <FooterBottomTwo
                        social_media={social_media}
                        branding={branding}

                    />

                </div>
            </>
        );
    }
}
const mapStateToProps=state=>({
    settingContent:state.settingContent
});

export default withRouter(connect(mapStateToProps)(FooterThree));