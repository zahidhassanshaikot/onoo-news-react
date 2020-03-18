import React, {Component} from 'react';
import StyleTwo350X390 from "../../post/StyleTwo350x390";
import StyleFour350X82 from "../../post/StyleFour350x82";
import StyleThree160X181 from "../../post/StyleThree160x181";

class SectionTwo extends Component {
    render() {
        let section = this.props.section;
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>{section.label}</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                {
                                    section.post[0] !== null ?
                                        <StyleTwo350X390  news = {section.post[0]}/>
                                        : null
                                }
                            </div>
                            <div className="col-lg-6">
                                {
                                    section.post.map((news,index)=>(
                                        index===0?
                                            null
                                            :
                                            <StyleFour350X82 key={index} news={news}/>
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

export default SectionTwo;