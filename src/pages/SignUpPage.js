import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import SignUp from "../components/theme-one/auth/SignUp";

class SignUpPage extends Component {
    render() {
        return (
            <>
                <Header history={this.props.history}/>
                <SignUp history={this.props.history}/>
                <Footer/>
            </>
        );
    }
}

export default SignUpPage;