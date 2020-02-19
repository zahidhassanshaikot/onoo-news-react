import React, {Component} from 'react';
import StyleSix350X250 from "../../../post/StyleSix350x250";
import StyleFour350X82 from "../../../post/StyleFour350x82";

class RecommendedPostWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">Recommended posts</h3>

                    <StyleSix350X250/>

                    <ul className="global-list">
                        <li>
                            <StyleFour350X82/>
                        </li>
                        <li>
                            <StyleFour350X82/>
                        </li>
                        <li>
                            <StyleFour350X82/>
                        </li>
                        <li>
                            <StyleFour350X82/>
                        </li>
                    </ul>
                </div>
            </>
    );
    }
    }

    export default RecommendedPostWidget;