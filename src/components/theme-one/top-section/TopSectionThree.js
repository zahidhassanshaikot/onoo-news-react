import React, {Component} from 'react';
import StyleFive224X282 from "../post/StyleFive224x282";
import SliderThree from "./slider/SliderThree";
import BreakingNewsTwo from "../breaking-news/BreakingNewsTwo";

class TopSectionThree extends Component {
    render() {
        return (
            <>
                <div className="sg-home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <SliderThree/>
                            </div>
                            <div className="col-lg-4">
                                <BreakingNewsTwo/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <StyleFive224X282/>
                            </div>
                            <div className="col-md-3">
                                <StyleFive224X282/>
                            </div>
                            <div className="col-md-3">
                                <StyleFive224X282/>
                            </div>
                            <div className="col-md-3">
                                <StyleFive224X282/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopSectionThree;