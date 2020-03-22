import React, {Component} from 'react';
import SliderTwo from "./slider/SliderTwo";
import StyleFour350X82 from "../post/StyleFour350x82";
import StyleEleven207X202 from "../post/StyleEleven207x202";
import BreakingNews from "../breaking-news/BreakingNews";

class TopSectionTwo extends Component {
    render() {
        let news =this.props.news;
        let {slider_news, featured_news, breaking_news} = {...news};
        return (
            <>
                <BreakingNews breaking_news={breaking_news}/>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <SliderTwo slider_news={slider_news}/>
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    {
                                        featured_news.map((news, index) => (
                                            index <= 1?
                                                <div className="col-md-6" key={index}>
                                                    <StyleEleven207X202
                                                        news={news}
                                                    />
                                                </div>
                                            :null
                                        ))
                                    }
                                </div>
                                {
                                    featured_news.map((news, index) => (
                                        index >1?
                                            <StyleFour350X82
                                                key={index}
                                                news={news}
                                            />
                                        :null
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSectionTwo;