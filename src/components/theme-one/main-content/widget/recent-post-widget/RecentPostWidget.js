import React, {Component} from 'react';
import StyleThree160X181 from "../../../post/StyleThree160x181";

class RecentPostWidget extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    <div className="row">
                        {
                            widget.recent_posts.map((news, index)=>(
                                <div key={index} className="col-md-6">
                                    <StyleThree160X181
                                        news={news}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default RecentPostWidget;