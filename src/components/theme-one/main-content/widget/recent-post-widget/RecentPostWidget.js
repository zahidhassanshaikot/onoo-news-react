import React, {Component} from 'react';
import StyleThree160X181 from "../../../post/StyleThree160x181";

class RecentPostWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">Recent Posts</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <StyleThree160X181/>
                        </div>
                        <div className="col-md-6">
                            <StyleThree160X181/>
                        </div>
                        <div className="col-md-6">
                            <StyleThree160X181/>
                        </div>
                        <div className="col-md-6">
                            <StyleThree160X181/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RecentPostWidget;