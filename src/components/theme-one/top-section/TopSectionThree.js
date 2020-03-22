import React, {Component} from 'react';
import StyleFive224X282 from "../post/StyleFive224x282";
import SliderThree from "./slider/SliderThree";
import BreakingNewsTwo from "../breaking-news/BreakingNewsTwo";
import StyleOne255X237 from "../post/StyleOne255x237";

class TopSectionThree extends Component {
    render() {
        let news =this.props.news;
        let {slider_news, featured_news, breaking_news} = {...news};
        return (
            <>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <SliderThree slider_news={slider_news}/>
                            </div>
                            <div className="col-lg-4">
                                <BreakingNewsTwo breaking_news={breaking_news}/>
                            </div>
                        </div>

                        <div className="row">
                            {
                                featured_news.map((news, index) => (
                                    index <= 3 ?
                                        <div className="col-md-3" key={index}>
                                            <StyleOne255X237 news={news}/>
                                        </div>
                                    : null
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSectionThree;