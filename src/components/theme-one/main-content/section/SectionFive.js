import React, {Component} from 'react';
import StyleSeven730x190 from "../../post/StyleSeven730x190";
import StyleFour350X82 from "../../post/StyleFour350x82";
import StyleTwo350X390 from "../../post/StyleTwo350x390";

class SectionFive extends Component {
    render() {
        let section=this.props.section;
        // let i=1;
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>{section.label}</h1>
                        </div>

                        <StyleSeven730x190 news={ section.post[0]}/>
                        <div className="row">
                            {
                                section.post.map((news,index)=> (
                                    (index === 0) ?
                                    null
                                    :
                                    <div key={index} className="col-lg-6">
                                        <StyleFour350X82 news={news}/>
                                    </div>
                                ))
                            }
                        </div>


                        {/*<div className="row">*/}
                        {/*    <div className="col-lg-6">*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*    </div>*/}
                        {/*    <div className="col-lg-6">*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*        /!*<StyleFour350X82/>*!/*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>
            </>
        );
    }
}

export default SectionFive;