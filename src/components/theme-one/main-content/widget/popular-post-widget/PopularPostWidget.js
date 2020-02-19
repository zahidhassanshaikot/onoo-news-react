import React, {Component} from 'react';
import StyleFour350X82 from "../../../post/StyleFour350x82";

class PopularPostWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">Popular posts</h3>

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

export default PopularPostWidget;