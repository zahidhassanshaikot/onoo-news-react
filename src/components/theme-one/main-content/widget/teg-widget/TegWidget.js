import React, {Component} from 'react';

class TegWidget extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget categories-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    <div className="tagcloud">
                        {
                            widget.tags.map((tag,index)=>(
                                <a key={index} href="#">{tag.title}</a>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default TegWidget;