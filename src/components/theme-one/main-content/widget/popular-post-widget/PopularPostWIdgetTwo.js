import React, {Component} from 'react';
import StyleFour350X82 from "../../../post/StyleFour350x82";

class PopularPostWIdgetTwo extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    <ul className="nav nav-tabs widget-tabs nav-pills nav-fill" id="myTab"
                        role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="daily-tab" data-toggle="tab"
                               href="#daily" role="tab" aria-controls="daily"
                               aria-selected="true">Daily</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="weekly-tab" data-toggle="tab" href="#weekly"
                               role="tab" aria-controls="weekly" aria-selected="false">Weekly</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="monthly-tab" data-toggle="tab"
                               href="#monthly" role="tab" aria-controls="monthly"
                               aria-selected="false">Monthly</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="daily" role="tabpanel"
                             aria-labelledby="daily-tab">
                            <ul className="global-list">
                                {
                                    widget.popular_posts.daily.map((news, index)=>(
                                        <li key={index}>
                                            <StyleFour350X82
                                                news={news}
                                            />
                                        </li>
                                    ))

                                }
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="weekly" role="tabpanel"
                             aria-labelledby="weekly-tab">
                            <ul className="global-list">
                                {
                                    widget.popular_posts.weekly.map((news, index)=>(
                                        <li key={index}>
                                            <StyleFour350X82
                                                news={news}
                                            />
                                        </li>
                                    ))

                                }
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="monthly" role="tabpanel"
                             aria-labelledby="monthly-tab">
                            <ul className="global-list">
                                {
                                    widget.popular_posts.monthly.map((news, index)=>(
                                        <li key={index}>
                                            <StyleFour350X82
                                                news={news}
                                            />
                                        </li>
                                    ))

                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PopularPostWIdgetTwo;