import React, {Component} from 'react';
import HeaderThree from "../components/theme-one/header/HeaderThree";
import HeaderAds from "../components/theme-one/ads/HeaderAds";
import FooterThree from "../components/theme-one/footer/FooterThree";
import Header from "../components/theme-one/header/Header";

class LayoutPage extends Component {
    render() {
        return (
            <>
                <Header history={this.props.history}/>

                {this.props.children}

                <FooterThree history={this.props.history}/>
            </>
        );
    }
}

export default LayoutPage;