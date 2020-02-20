import React, {Component} from 'react';
import logo from '../../../../assets/images/logo.png'
import StyleThree160X181 from "../../post/StyleThree160x181";
import {Link} from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <>
                <div className="sg-menu">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <div className="menu-content">
                                <Link className="navbar-brand" to="/"><img src={logo} alt="Logo"
                                                                                   className="img-fluid"/></Link>

                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul  className="navbar-nav">
                                        <li className="nav-item sg-dropdown active">
                                            <Link to="/">Home<span><i className="fa fa-angle-down"
                                                                         aria-hidden="true"></i></span></Link>
                                            <ul className="sg-dropdown-menu">
                                                <li className="active"><Link to="/">Home V-1</Link></li>
                                                <li><a href="index1.html">Home V-2</a></li>
                                                <li><a href="index2.html">Home V-3</a></li>
                                            </ul>
                                        </li>
                                        <li className="sg-dropdown mega-dropdown">
                                            <a href="#">Life Style<span><i className="fa fa-angle-down"
                                                                           aria-hidden="true"></i></span></a>
                                            <div className="sg-dropdown-menu mega-dropdown-menu">
                                                <div className="mega-menu-content">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <ul className="nav nav-tabs" role="tablist">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active" id="all-tab"
                                                                       data-toggle="tab" href="#all" role="tab"
                                                                       aria-controls="all" aria-selected="true">All</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="photography-tab"
                                                                       data-toggle="tab" href="#photography" role="tab"
                                                                       aria-controls="photography"
                                                                       aria-selected="false">Photography</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="business-tab"
                                                                       data-toggle="tab" href="#business" role="tab"
                                                                       aria-controls="business"
                                                                       aria-selected="false">Business</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="design-tab"
                                                                       data-toggle="tab" href="#design" role="tab"
                                                                       aria-controls="design"
                                                                       aria-selected="false">Design</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link" id="tech-tab" data-toggle="tab"
                                                                       href="#tech" role="tab" aria-controls="tech"
                                                                       aria-selected="false">Tech</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div className="tab-content" id="myTabContent">
                                                                <div className="tab-pane fade show active" id="all"
                                                                     role="tabpanel" aria-labelledby="all-tab">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3">
                                                                            <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                            <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                            <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                            <StyleThree160X181/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="photography"
                                                                     role="tabpanel" aria-labelledby="photography-tab">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="business" role="tabpanel"
                                                                     aria-labelledby="business-tab">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="design" role="tabpanel"
                                                                     aria-labelledby="design-tab">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="tech" role="tabpanel"
                                                                     aria-labelledby="tech-tab">
                                                                    <div className="row">
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                        <div className="col-md-6 col-lg-3">
                                                                             <StyleThree160X181/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sg-dropdown mega-dropdown">
                                            <a href="#">Category<span><i className="fa fa-angle-down"
                                                                         aria-hidden="true"></i></span></a>
                                            <div className="sg-dropdown-menu mega-dropdown-menu">
                                                <div className="mega-menu-content">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <h3>Top News</h3>
                                                            <ul className="global-list">
                                                                <li className="active"><a href="#">Criket match</a></li>
                                                                <li><a href="#">Earth fire</a></li>
                                                                <li><a href="#">Education</a></li>
                                                                <li><a href="#">Banking seba</a></li>
                                                                <li><a href="#">Best Program</a></li>
                                                                <li><a href="#">About News</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h3>Related Post</h3>
                                                            <ul className="global-list">
                                                                <li><a href="#">Forest</a></li>
                                                                <li><a href="#">Rivers</a></li>
                                                                <li><a href="#">Sport Criket</a></li>
                                                                <li><a href="#">Sport Football</a></li>
                                                                <li><a href="#">Video & music</a></li>
                                                                <li><a href="#">Natural country</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h3>Business</h3>
                                                            <ul className="global-list">
                                                                <li><a href="#">Greta thunberg let</a></li>
                                                                <li><a href="#">5 Crucial lessons learn</a></li>
                                                                <li><a href="#">Adios alexa, How goole</a></li>
                                                                <li><a href="#">Microsoft</a></li>
                                                                <li><a href="#">Theme video</a></li>
                                                                <li><a href="#">Next Future</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h3>Technology</h3>
                                                            <ul className="global-list">
                                                                <li><a href="#">Electronic</a></li>
                                                                <li><a href="#">Science</a></li>
                                                                <li><a href="#">About Digital Bangladesh</a></li>
                                                                <li><a href="#">A samsung satellite </a></li>
                                                                <li><a href="#">Earth station</a></li>
                                                                <li><a href="#">New document</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">All Category</a></li>
                                    </ul>
                                </div>

                                <div className="sg-search">
                                    <div className="search-form">
                                        <form action="#" id="search" method="get">
                                            <input className="form-control" name="search" type="text"
                                                   placeholder="Search here.."/>
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>

        );
    }
}

export default Menu;