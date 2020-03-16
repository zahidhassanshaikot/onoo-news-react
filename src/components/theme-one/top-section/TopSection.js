import React, {Component} from 'react';
import Slider from "./slider/Slider";
import StyleOne255X237 from "../post/StyleOne255x237";
import BreakingNews from "../breaking-news/BreakingNews";


class TopSection extends Component {
    render() {
        let news =this.props.news;
        let {slider_news, featured_news, breaking_news} = {...news};
        return (
            <>
                <BreakingNews breaking_news={breaking_news}/>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Slider slider_news={slider_news} />
                            </div>
                            <div className="col-lg-6">
                                <div className="row">

                                    {
                                        featured_news.map((news,index)=>(
                                            <div key={index} className="col-md-6">
                                                <StyleOne255X237 news={news}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSection;