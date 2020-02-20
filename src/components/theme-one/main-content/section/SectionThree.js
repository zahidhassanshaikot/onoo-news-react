import React, {Component} from 'react';
import StyleTwo350X390 from "../../post/StyleTwo350x390";
import StyleFour350X82 from "../../post/StyleFour350x82";

class SectionThree extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>social good</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <StyleTwo350X390/>
                            </div>
                            <div className="col-lg-6">
                                <StyleTwo350X390/>
                            </div>
                            <div className="col-lg-6">
                                <StyleFour350X82/>
                                <StyleFour350X82/>
                                <StyleFour350X82/>
                            </div>
                            <div className="col-lg-6">
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

export default SectionThree;