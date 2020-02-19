import React, {Component} from 'react';

class PollWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">vote / poll</h3>
                    <p>Do you like reading in the subway?</p>
                    <form action="#">
                        <input type="radio" name="sellType" id="yes"/>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="sellType" id="no"/>
                        <label htmlFor="no"> No</label>

                        <a href="#" className="btn btn-primary">vote</a>
                        <a href="#">View Results</a>
                    </form>
                    <div className="progress-content">
                        <span>HTML</span>
                        <div className="progress">
                            <div className="progress-bar" style={{width:"98%"}}>98%</div>
                        </div>
                        <span>CSS</span>
                        <div className="progress">
                            <div className="progress-bar" style={{width:"95%"}}>95%</div>
                        </div>
                        <span>WordPress</span>
                        <div className="progress">
                            <div className="progress-bar" style={{width:"80%"}}>80%</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PollWidget;