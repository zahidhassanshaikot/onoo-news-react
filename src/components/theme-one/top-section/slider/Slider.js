import React, {Component} from 'react';
import SlickSlider from "react-slick";

class Slider extends Component {
    render() {
        var settings = {
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed:10000,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <>
                <SlickSlider {...settings} className="post-slider">
                {/*<div className="post-slider">*/}
                    <div className="sg-post featured-post">
                        <div className="entry-header">
                            <div className="entry-thumbnail">
                                <a href="details.html">
                                    <img
                                        className="img-fluid"
                                        src={ require("../../../../assets/images/post/1.jpg") }
                                        alt="Image"/>
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
                                    <li><a href="#">November 4, 2019</a></li>
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
                                        src={ require("../../../../assets/images/post/1.jpg") }
                                        alt="Image"/>
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
                                    <li><a href="#">November 4, 2019</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                {/*</div>*/}
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


export default Slider;
