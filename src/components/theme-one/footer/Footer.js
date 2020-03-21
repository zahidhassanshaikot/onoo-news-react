import React, {Component} from 'react';
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTop from "./footer-top/FooterTop";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loadHomeContent} from "../../../store/actions/homeAction";
import {loadSettingsContent} from "../../../store/actions/settingAction";

class Footer extends Component {
    render() {
        let {branding, widgets} = this.props.settingContent;

        return (
            <>
                <div className="footer footer-style-1">
                    {
                        widgets.length > 0 ?
                            <FooterTop
                                widgets={widgets}

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
export default withRouter(connect(mapStateToProps)(Footer));