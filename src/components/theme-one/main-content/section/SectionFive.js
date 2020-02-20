import React, {Component} from 'react';
import StyleSeven730x190 from "../../post/StyleSeven730x190";
import StyleFour350X82 from "../../post/StyleFour350x82";

class SectionFive extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>Culture</h1>
                        </div>

                        <StyleSeven730x190/>

                        <div className="row">
                            <div className="col-lg-6">
                                <StyleFour350X82/>
                                <StyleFour350X82/>
                                <StyleFour350X82/>
                            </div><div className="col-lg-6">
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

export default SectionFive;