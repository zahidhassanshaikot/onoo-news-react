import React, {Component} from 'react';
import StyleSix350X250 from "../../../post/StyleSix350x250";
import StyleFour350X82 from "../../../post/StyleFour350x82";

class RecommendedPostWidget extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    {
                        widget.recommended_posts[0] !== null ?
                            <StyleSix350X250
                                news={widget.recommended_posts[0]}
                            />
                        :null
                    }


                    <ul className="global-list">
                        {
                            widget.recommended_posts.map((news, index)=>(
                                index===0?
                                    null
                                :
                                <li key={index}>
                                    <StyleFour350X82 news={news}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </>
    );
    }
    }

    export default RecommendedPostWidget;