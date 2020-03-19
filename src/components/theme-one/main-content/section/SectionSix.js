import React, {Component} from 'react';
import StyleSeven730x190 from "../../post/StyleSeven730x190";
import StyleThree160X181 from "../../post/StyleThree160x181";

class SectionSix extends Component {

    render() {
        let news = this.props.latest_post;
        return (
            <>
                <div className="sg-section">
                    <div className="section-content mt-3">
                        <div className="section-title">
                            <h1>Latest posts</h1>
                        </div>
                        {
                            news.map((news,index)=>(

                                <StyleSeven730x190
                                    news={news}
                                    key={index}
                                />
                            ))
                        }

                    </div>
                </div>
            </>
        );
    }
}

export default SectionSix;