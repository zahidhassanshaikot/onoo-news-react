import React, {Component, Fragment} from 'react';
import Switch from "react-toggle-switch";
import {Link} from "react-router-dom";

class PollWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultShow: false
        };
    }
    resultShowOnClick = () => {
        this.setState(prevState => {
            return {
                resultShow: !prevState.resultShow
            };
        });
    };
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    {
                        widget.polls.map((poll, index)=>(

                            <div style={{paddingBottom:"20px"}} key={index}>
                                {
                                    index !== 0 ?
                                        <hr/>
                                    :null
                                }
                                <p>{poll.question}</p>

                                <form action="#">
                                    {
                                        (poll.option_1 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_1"+poll.id}/>
                                                <label htmlFor={"option_1"+poll.id}>{poll.option_1}</label>
                                            </Fragment>
                                        :null
                                    }
                                    {
                                        (poll.option_2 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_2"+poll.id}/>
                                                <label htmlFor={"option_2"+poll.id}>{poll.option_2}</label>
                                            </Fragment>
                                        :null
                                    }
                                    {
                                        (poll.option_3 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_3"+poll.id}/>
                                                <label htmlFor={"option_3"+poll.id}>{poll.option_3}</label>
                                            </Fragment>
                                        :null
                                    }
                                    {
                                        (poll.option_4 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_4"+poll.id}/>
                                                <label htmlFor={"option_4"+poll.id}>{poll.option_4}</label>
                                            </Fragment>
                                        :null
                                    }
                                    {
                                        (poll.option_5 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_5"+poll.id}/>
                                                <label htmlFor={"option_5"+poll.id}>{poll.option_5}</label>
                                            </Fragment>
                                        :null
                                    }
                                    {
                                        (poll.option_6 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_6"+poll.id}/>
                                                <label htmlFor={"option_6"+poll.id}>{poll.option_6}</label>
                                            </Fragment>
                                            :null
                                    }
                                    {
                                        (poll.option_7 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_7"+poll.id}/>
                                                <label htmlFor={"option_7"+poll.id}>{poll.option_7}</label>
                                            </Fragment>
                                            :null
                                    }
                                    {
                                        (poll.option_8 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_8"+poll.id}/>
                                                <label htmlFor={"option_8"+poll.id}>{poll.option_8}</label>
                                            </Fragment>
                                            :null
                                    }
                                    {
                                        (poll.option_9 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_9"+poll.id}/>
                                                <label htmlFor={"option_9"+poll.id}>{poll.option_9}</label>
                                            </Fragment>
                                            :null
                                    }
                                    {
                                        (poll.option_10 !== null) ?
                                            <Fragment>
                                                <input type="radio" name={"option"+poll.id} id={"option_10"+poll.id}/>
                                                <label htmlFor={"option_10"+poll.id}>{poll.option_10}</label>
                                            </Fragment>
                                            :null
                                    }

                                    <a href="#" className="btn btn-primary">vote</a>
                                    <Link onClick={this.resultShowOnClick}>View Results</Link>
                                </form>


                                { this.state.resultShow === true && (
                                    <div className="progress-content">
                                        {
                                            (poll.option_1 !== null) ?
                                                <Fragment>
                                                    <span>{poll.option_1}</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" style={{width:poll.result.option_1+"%"}}>{poll.result.option_1}%</div>
                                                    </div>
                                                </Fragment>
                                            :null
                                        }


                                        {/*<span>CSS</span>*/}
                                        {/*<div className="progress">*/}
                                        {/*    <div className="progress-bar" style={{width:"95%"}}>95%</div>*/}
                                        {/*</div>*/}
                                        {/*<span>WordPress</span>*/}
                                        {/*<div className="progress">*/}
                                        {/*    <div className="progress-bar" style={{width:"80%"}}>80%</div>*/}
                                        {/*</div>*/}
                                    </div>
                                )}


                            </div>
                        ))
                    }


                </div>
            </>
        );
    }
}

export default PollWidget;