import React, {Component} from 'react';
import StyleTwo350X390 from "../../post/StyleTwo350x390";

class AuthorSection extends Component {
    render() {
        return (
            <>
                <div className="author-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                            </ol>
                        </nav>
                        <div className="author-content">
                            <div className="author-top-content d-md-flex">
                                <div className="author">
                                    <img
                                        className="img-fluid"
                                        src={ require("../../../../assets/images/others/author2.png") }
                                        alt="Image"
                                    />
                                </div>
                                <div className="author-info">
                                    <h2>Al-amin Hosen</h2>
                                    <div className="active">
                                        <span>Last seen: Just Now</span>
                                    </div>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, making it over 2000 years
                                        old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more obscure Latin words, consectetur, from a
                                        Lorem Ipsum passage, and going through the cites of the word in classical
                                        literature, discovered the undoubtable source.</p>
                                    <div className="entry-meta">
                                        <ul className="global-list">
                                            <li><a href="#">Member since May 27, 2019</a></li>
                                            <li><i className="fa fa-envelope-o"></i><a href="#">alamin@gmail.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sg-social">
                                        <ul className="global-list d-flex">
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="user-info mb-5">
                                        <div className="following">
                                            <h3>Following (15)</h3>
                                            <ul className="global-list">
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid"
                                                            src={ require("../../../../assets/images/others/1.png") }
                                                            alt="Image"
                                                        />
                                                        <span>more</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="followers">
                                            <h3>Followers (19)</h3>
                                            <ul className="global-list">

                                                <li>
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid"
                                                            src={ require("../../../../assets/images/others/1.png") }
                                                            alt="Image"
                                                        />
                                                        <span>more</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid"
                                                            src={ require("../../../../assets/images/others/1.png") }
                                                            alt="Image"
                                                        />
                                                        <span>more</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <StyleTwo350X390/>
                                        </div>
                                        <div className="col-lg-6">
                                            <StyleTwo350X390/>
                                        </div>
                                        <div className="col-lg-6">
                                            <StyleTwo350X390/>
                                        </div>
                                        <div className="col-lg-6">
                                            <StyleTwo350X390/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AuthorSection;