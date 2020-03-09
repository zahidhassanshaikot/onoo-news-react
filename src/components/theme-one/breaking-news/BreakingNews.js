import React, {Component} from 'react';
import SlickSlider from "react-slick";

class BreakingNews extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            autoplay:true,
            autoplaySpeed: 3000,
            speed: 1000,
            fade:true,
            pauseOnHover:true,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <>
                <div className="sg-breaking-news">
                    <div className="container">
                        <div className="breaking-content d-flex">
                            <span>Breaking News</span>
                            <SlickSlider  {...settings} className="news-ticker">
                                <li><a href="#">Plastic is being recycled into fuel and this cannabis company wants
                                    in</a></li>
                                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
                            </SlickSlider>
                        </div>
                    </div>
                </div>
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

export default BreakingNews;