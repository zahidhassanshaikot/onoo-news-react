import React, {Component} from 'react';

class TegWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget categories-widget">
                    <h3 className="widget-title">Popular Tag</h3>
                    <div className="tagcloud">
                        <a href="#">Action</a>
                        <a href="#">Animation</a>
                        <a href="#">Apple</a>
                        <a href="#">Cricket</a>
                        <a href="#">Animator</a>
                        <a href="#">Food</a>
                        <a href="#">Computer</a>
                        <a href="#">Games</a>
                        <a href="#">Sports</a>
                        <a href="#">Racing Car</a>
                        <a href="#">Health</a>
                    </div>
                </div>
            </>
        );
    }
}

export default TegWidget;