import React, {Component} from 'react';
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTopTwo from "./footer-top/FooterTopTwo";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class FooterTwo extends Component {
    render() {
        let {branding, widgets, social_media} = this.props.settingContent;
        return (
            <>
                <div className="footer footer-style-1">
                    {
                        widgets.length > 0 ?
                            <FooterTopTwo
                                widgets={widgets}
                                social_media={social_media}

                            />
                            :null
                    }

                    {
                        branding ?
                            <FooterBottom
                                application_name={branding.application_name}
                            />
                            :null
                    }
                </div>
            </>
        );
    }
}
const mapStateToProps=state=>({
    settingContent:state.settingContent
});

export default withRouter(connect(mapStateToProps)(FooterTwo));