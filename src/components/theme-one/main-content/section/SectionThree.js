import React, {Component} from 'react';
import StyleTwo350X390 from "../../post/StyleTwo350x390";
import StyleFour350X82 from "../../post/StyleFour350x82";

class SectionThree extends Component {
    render() {
        let section =this.props.section;
        let postLength = section.post.length;

        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>{section.label}</h1>
                        </div>
                        <div className="row">
                            {
                                section.post.map((news,index)=> (
                                        (index <= 1) ?
                                            <div key={index} className="col-lg-6">
                                                <StyleTwo350X390 news={news}/>
                                            </div>

                                        : (index >=2) ?
                                            <div key={index} className="col-lg-6">
                                                <StyleFour350X82 news={news}/>
                                            </div>
                                        :null
                                    ))
                            }

                            <div className="col-lg-6">
                                {/*<StyleFour350X82/>*/}
                            </div>
                            <div className="col-lg-6">
                                {/*<StyleFour350X82/>*/}
                            </div>

                            <div className="col-lg-6">
                                {/*<StyleFour350X82/>*/}
                                {/*<StyleFour350X82/>*/}
                                {/*<StyleFour350X82/>*/}
                            </div>
                            <div className="col-lg-6">
                                {/*<StyleFour350X82/>*/}
                                {/*<StyleFour350X82/>*/}
                                {/*<StyleFour350X82/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionThree;