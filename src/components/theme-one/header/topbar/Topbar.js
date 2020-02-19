import React, {Component} from 'react';

class Topbar extends Component {

    componentDidMount() {
        // document.body.class = "dark";
    }

    render() {
        return (
            <>
                <div className="sg-topbar">
                    <div className="container">
                        <div className="d-md-flex justify-content-md-between">
                            <div className="left-contennt">
                                <ul className="global-list">
                                    <li><i className="fa fa-calendar mr-2" aria-hidden="true"></i>Monday, 11 November
                                        2019
                                    </li>
                                </ul>
                            </div>

                            <div className="right-content d-flex">
                                <div className="sg-social mr-md-5">
                                    <ul className="global-list">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>

                                <div className="sg-user">
                                    <span><i className="fa fa-user-circle mr-2" aria-hidden="true"></i><a
                                        href="sign-in.html">Login</a> / <a href="sign-up.html"> SignUp</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Topbar;