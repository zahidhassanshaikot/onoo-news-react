import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import HeaderThree from "../components/theme-one/header/HeaderThree";
import FooterThree from "../components/theme-one/footer/FooterThree";
import Header from "../components/theme-one/header/Header";
import HeaderTwo from "../components/theme-one/header/HeaderTwo";
import {loadSettingsContent} from "../store/actions/settingAction";
import {connect} from "react-redux";
import Footer from "../components/theme-one/footer/Footer";
import FooterTwo from "../components/theme-one/footer/FooterTwo";

class LayoutPage extends Component {

componentDidMount() {
    // this.props.loadSettingsContent();
}

    render() {
        let theme = this.props.settingContent.theme;
        let {header_style,footer_style}= {...theme};

        return (
            <>
                {
                    header_style === 'header_1' ? <Header history={this.props.history}/>
                    : header_style === 'header_2' ? <HeaderTwo history={this.props.history}/>
                    : header_style === 'header_3' ? <HeaderThree history={this.props.history}/>
                    : <Header history={this.props.history}/>
                }

                { this.props.children }

                {
                    footer_style === 'footer_1' ? <Footer history={this.props.history}/>
                        : footer_style === 'footer_2' ? <FooterTwo history={this.props.history}/>
                        : footer_style === 'footer_3' ? <FooterThree history={this.props.history}/>
                        : <Footer history={this.props.history}/>
                }
            </>
        );
    }
}

const mapStateToProps=state=>({
    settingContent:state.settingContent
});

export default withRouter(connect(mapStateToProps)(LayoutPage));