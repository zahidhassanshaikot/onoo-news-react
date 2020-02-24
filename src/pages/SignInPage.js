import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import {Link} from "react-router-dom";
import SignIn from "../components/theme-one/auth/SignIn";

class SignInPage extends Component {
    render() {
        return (
            <>
                <Header history={this.props.history}/>
                <SignIn history={this.props.history}/>
                <Footer/>
            </>
        );
    }
}

export default SignInPage;