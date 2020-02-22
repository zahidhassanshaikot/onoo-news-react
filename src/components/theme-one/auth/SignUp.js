import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <>
                <div className="ragister-account text-center">
                    <div className="container">
                        <div className="account-content">
                            <h1>Sign Up</h1>
                            <form className="ragister-form" name="ragister-form" method="post" action="#">
                                <div className="form-group text-left mb-0">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" required="required" placeholder="admin"/>
                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" required="required" placeholder="admin"/>
                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required="required"
                                           placeholder="demo@gmail.com"/>
                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Password</label>
                                    <input type="password" className="form-control" required="required"
                                           placeholder="***********"/>
                                </div>
                                <button type="submit">Login</button>
                                <div className="middle-content">
                                    <p>Already have an account? <Link to="/sign-in">Login</Link></p>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <div className="buttons">
                                    <a className="facebook" href="#"><span><i className="fa fa-facebook"
                                                                              aria-hidden="true"></i></span>login with
                                        facebook</a>
                                    <a className="google-plus" href="#"><span><i className="fa fa-google-plus"
                                                                                 aria-hidden="true"></i></span>login
                                        with google plus</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SignUp;