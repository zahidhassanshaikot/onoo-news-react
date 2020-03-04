import React, {Component} from 'react';

class SliderThree extends Component {
    render() {
        return (
            <>
                <div id="home-carousel" className="carousel slide slider-style-1" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="sg-post featured-post">
                                <div className="entry-header">
                                    <div className="entry-thumbnail">
                                        <a href="details.html">
                                            <img className="img-fluid"
                                                 src={ require("../../../../assets/images/post/12.jpg") }
                                                 alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-content absolute text-center">
                                    <div className="category" data-animation="animated pulse">
                                        <ul className="global-list justify-content-center">
                                            <li><a href="#">Technology</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="entry-title" data-animation="animated pulse">
                                        <a href="details.html">Airbnb bans 'party houses' even following
                                            mass shooting</a>
                                    </h2>
                                    <div className="entry-meta" data-animation="animated pulse">
                                        <ul className="global-list justify-content-center">
                                            <li>By <a href="#">Mahananda</a></li>
                                            <li><a href="#">November 4, 2019</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="sg-post featured-post">
                                <div className="entry-header">
                                    <div className="entry-thumbnail">
                                        <a href="details.html">
                                            <img className="img-fluid"
                                                 src={ require("../../../../assets/images/post/12.jpg") }
                                                 alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-content absolute">
                                    <div className="category" data-animation="animated fadeInDown">
                                        <ul className="global-list">
                                            <li><a href="#">Technology</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="entry-title" data-animation="animated fadeInDown">
                                        <a href="details.html">Airbnb bans 'party houses' even following
                                            mass shooting</a>
                                    </h2>
                                    <div className="entry-meta" data-animation="animated fadeInDown">
                                        <ul className="global-list">
                                            <li>By <a href="#">Mahananda</a></li>
                                            <li><a href="#">November 4, 2019</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="sg-post featured-post">
                                <div className="entry-header">
                                    <div className="entry-thumbnail">
                                        <a href="details.html">
                                            <img className="img-fluid"
                                                 src={ require("../../../../assets/images/post/12.jpg") }
                                                 alt="Image"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="entry-content absolute text-right">
                                    <div className="category" data-animation="animated fadeInUp">
                                        <ul className="global-list justify-content-end">
                                            <li><a href="#">Technology</a></li>
                                        </ul>
                                    </div>
                                    <h2 className="entry-title" data-animation="animated fadeInUp">
                                        <a href="details.html">Airbnb bans 'party houses' even following
                                            mass shooting</a>
                                    </h2>
                                    <div className="entry-meta" data-animation="animated fadeInUp">
                                        <ul className="global-list justify-content-end">
                                            <li>By <a href="#">Mahananda</a></li>
                                            <li><a href="#">November 4, 2019</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#home-carousel" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#home-carousel" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </>
        );
    }
}

export default SliderThree;