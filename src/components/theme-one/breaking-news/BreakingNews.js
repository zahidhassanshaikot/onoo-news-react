import React, {Component} from 'react';
import SlickSlider from "react-slick";
import {Link} from "react-router-dom";

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
        let breaking_news = this.props.breaking_news;
        return (

            <>
                <div className="sg-breaking-news">
                    <div className="container">
                        <div className="breaking-content d-flex">
                            <span>Breaking News</span>
                            {

                                breaking_news.length > 0 ?
                                    <SlickSlider  {...settings} className="news-ticker">
                                        {
                                            breaking_news.map((news,index)=>(
                                                <li key={index}><Link to={"/details/"+news.slug}>{news.title}</Link></li>
                                            ))
                                        }
                                    </SlickSlider>
                                    :null

                            }

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