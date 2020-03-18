import React, {Component} from 'react';
import StyleFive224X282 from "../../post/StyleFive224x282";

class SectionFour extends Component {
    render() {
        let section=this.props.section;
        return (
            <>
                <div className="sg-section">
                    <div className="section-content mt-3">
                        <div className="section-title">
                            <h1>{section.label}</h1>
                        </div>
                        <div className="row">
                            {
                                section.post.map((news,index)=> (
                                    <div key={index} className="col-lg-4">
                                        <StyleFive224X282 news={news}/>
                                    </div>
                                ))
                            }



                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionFour;