import React, {Component} from 'react';
import SliderTwo from "./slider/SliderTwo";
import StyleFour350X82 from "../post/StyleFour350x82";
import StyleEleven207X202 from "../post/StyleEleven207x202";
import BreakingNews from "../breaking-news/BreakingNews";

class TopSectionTwo extends Component {
    render() {
        return (
            <>
                <BreakingNews/>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <SliderTwo/>
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <StyleEleven207X202/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleEleven207X202/>
                                    </div>
                                </div>
                                <StyleFour350X82/>
                                <StyleFour350X82/>
                                <StyleFour350X82/>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSectionTwo;