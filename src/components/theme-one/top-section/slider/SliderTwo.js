import React, {Component, Fragment} from 'react';
import SlickSlider from "react-slick";
import default_image from "../../../../assets/images/default_image/1080x1000.png";
import default_image_three from "../../../../assets/images/default_image/460x350.png";
import {Link} from "react-router-dom";
import moment from "moment";

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
        let slider_news = this.props.slider_news;
        return (
            <>
                {
                    slider_news.length > 0 ?
                        <Fragment>
                            <SlickSlider {...settingsHomeSlider}
                                         asNavFor={this.state.nav2}
                                         ref={slider => (this.slider1 = slider)}
                                         className="home-slider"
                            >
                                {
                                    slider_news.map((news,index)=>(
                                        <div className="sg-post featured-post" key={index}>
                                            <div className="entry-header">
                                                <div className="entry-thumbnail">
                                                    <Link to={"/details/"+news.slug}>
                                                        <img
                                                            className="img-fluid"
                                                            src={ news.image ? news.image.medium_image_three : default_image_three}
                                                            alt="Image"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="entry-content absolute">
                                                <div className="category">
                                                    <ul className="global-list">
                                                        <li><a href="#">{news.category.category_name}</a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="entry-title">
                                                    <Link to={"/details/"+news.slug}>
                                                        {news.title}
                                                    </Link>
                                                </h2>
                                                <div className="entry-meta">
                                                    <ul className="global-list">
                                                        <li>By <a href="#">{news.user.first_name}</a></li>
                                                        <li><a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </SlickSlider>


                            <SlickSlider {...settingsHomeSliderNav}
                                         asNavFor={this.state.nav1}
                                         ref={slider => (this.slider2 = slider)}
                                         className="home-slider-nav"
                            >
                                {
                                    slider_news.map((news,index)=>(
                                        <div className="thumb" key={index}>
                                            <img
                                                className="img-fluid"
                                                src={ news.image ? news.image.big_image : default_image}
                                                alt="Image"
                                            />
                                        </div>
                                    ))
                                }

                            </SlickSlider>
                        </Fragment>
                    :null
                }

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