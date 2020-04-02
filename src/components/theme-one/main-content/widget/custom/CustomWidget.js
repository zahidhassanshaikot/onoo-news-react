import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";

class CustomWidget extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget categories-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    <div className="tagcloud">
                        {
                            ReactHtmlParser(widget.content)
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default CustomWidget;