import React, {Component} from 'react';
import StyleTwo350X390 from "../../post/StyleTwo350x390";
import StyleThree160X181 from "../../post/StyleThree160x181";

class SectionOne extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>Entertainment</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <StyleTwo350X390/>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <StyleThree160X181/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleThree160X181/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleThree160X181/>
                                    </div>
                                    <div className="col-md-6">
                                        <StyleThree160X181/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionOne;