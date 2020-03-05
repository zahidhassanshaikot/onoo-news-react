import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import SignUp from "../components/theme-one/auth/SignUp";
import {withRouter} from "react-router-dom";

class SignUpPage extends Component {
    render() {
        return (
            <>
                {/*<Header/>*/}
                <SignUp />
                {/*<Footer/>*/}
            </>
        );
    }
}

export default withRouter(SignUpPage);