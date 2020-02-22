import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import {Link} from "react-router-dom";
import SignIn from "../components/theme-one/auth/SignIn";

class SignInPage extends Component {
    render() {
        return (
            <>
                <Header/>
                <SignIn/>
                <Footer/>
            </>
        );
    }
}

export default SignInPage;