import React, {Component} from 'react';
import SlickSlider from "react-slick";

class BreakingNewsTwo extends Component {
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
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            pauseOnHover:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
            autoplay:true,
            rtl: true
        };
        return (
            <>
                <div className="sg-breaking-news"
                     style={{
                        height: "405px",
                        overflow: "hidden"
                    }}
                >
                    <div className="section-title">
                        <h1>Breaking News</h1>
                    </div>
                    <div className="gallery-turner">
                        <a className="next" onClick={this.next}><span><i
                            className="fa fa-angle-left"></i></span></a>
                        <a className="prev" onClick={this.previous}><span><i className="fa fa-angle-right"></i></span></a>
                    </div>
                    <SlickSlider ref={c => (this.slider = c)} {...settings}
                                 className="breaking-news-slider">
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sg-post">
                            <div className="entry-content">
                                <div className="category">
                                    <ul className="global-list">
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                                <h2 className="entry-title">
                                    <a href="details.html">Airbnb bans 'party houses' even following
                                        mass shooting</a>
                                </h2>
                                <div className="entry-meta">
                                    <ul className="global-list">
                                        <li><a href="#">2 Hours ago</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SlickSlider>
                </div>
            </>
        );
    }
}

export default BreakingNewsTwo;