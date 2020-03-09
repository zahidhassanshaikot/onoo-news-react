import React, {Component} from 'react';
import SlickSlider from "react-slick";

class SliderTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        var settingsHomeSlider = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            speed: 1500,
            autoplay:true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            asNavFor: '.home-slider-nav'
        };
        var settingsHomeSliderNav = {
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.home-slider',
            dots: false,
            speed: 1500,
            arrows: false,
            focusOnSelect: true,
            swipeToSlide:true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow:4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <>
                <SlickSlider {...settingsHomeSlider}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    className="home-slider"
                >
                    <div className="sg-post featured-post">
                        <div className="entry-header">
                            <div className="entry-thumbnail">
                                <a href="details.html">
                                    <img
                                        className="img-fluid"
                                        src="images/post/5.jpg"
                                        src={ require("../../../../assets/images/post/5.jpg") }
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="entry-content absolute">
                            <div className="category">
                                <ul className="global-list">
                                    <li><a href="#">Technology</a></li>
                                </ul>
                            </div>
                            <h2 className="entry-title">
                                <a href="details.html">Airbnb bans 'party houses' even following mass
                                    shooting</a>
                            </h2>
                            <div className="entry-meta">
                                <ul className="global-list">
                                    <li>By <a href="#">Mahananda</a></li>
                                    <li><a href="#">November 4, 2020</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sg-post featured-post">
                        <div className="entry-header">
                            <div className="entry-thumbnail">
                                <a href="details.html">
                                    <img
                                        className="img-fluid"
                                        src={ require("../../../../assets/images/post/5.jpg") }
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="entry-content absolute">
                            <div className="category">
                                <ul className="global-list">
                                    <li><a href="#">Technology</a></li>
                                </ul>
                            </div>
                            <h2 className="entry-title">
                                <a href="details.html">Airbnb bans 'party houses' even following mass
                                    shooting</a>
                            </h2>
                            <div className="entry-meta">
                                <ul className="global-list">
                                    <li>By <a href="#">Mahananda</a></li>
                                    <li><a href="#">November 4, 2020</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="sg-post featured-post">
                        <div className="entry-header">
                            <div className="entry-thumbnail">
                                <a href="details.html">
                                    <img
                                        className="img-fluid"
                                        src={ require("../../../../assets/images/post/5.jpg") }
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="entry-content absolute">
                            <div className="category">
                                <ul className="global-list">
                                    <li><a href="#">Technology</a></li>
                                </ul>
                            </div>
                            <h2 className="entry-title">
                                <a href="details.html">Airbnb bans 'party houses' even following mass
                                    shooting</a>
                            </h2>
                            <div className="entry-meta">
                                <ul className="global-list">
                                    <li>By <a href="#">Mahananda</a></li>
                                    <li><a href="#">November 4, 2020</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="sg-post featured-post">
                        <div className="entry-header">
                            <div className="entry-thumbnail">
                                <a href="details.html">
                                    <img
                                        className="img-fluid"
                                        src={ require("../../../../assets/images/post/5.jpg") }
                                        alt="Image"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="entry-content absolute">
                            <div className="category">
                                <ul className="global-list">
                                    <li><a href="#">Technology</a></li>
                                </ul>
                            </div>
                            <h2 className="entry-title">
                                <a href="details.html">Airbnb bans 'party houses' even following mass
                                    shooting</a>
                            </h2>
                            <div className="entry-meta">
                                <ul className="global-list">
                                    <li>By <a href="#">Mahananda</a></li>
                                    <li><a href="#">November 4, 2020</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SlickSlider>


                <SlickSlider {...settingsHomeSliderNav}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    className="home-slider-nav"
                >
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                    </div>
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                </div>
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                    </div>
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                    </div>
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                    </div>
                    <div className="thumb">
                        <img
                            className="img-fluid"
                            src={ require("../../../../assets/images/post/1.jpg") }
                            alt="Image"
                        />
                    </div>
                </SlickSlider>
            </>
        );
    }
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="fa fa-angle-right slick-arrow"
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <i
            className="fa fa-angle-left slick-arrow"
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
        </i>
    );
}



export default SliderTwo;