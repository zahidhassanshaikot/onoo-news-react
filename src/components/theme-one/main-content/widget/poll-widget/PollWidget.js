import React, {Component, Fragment} from 'react';
import Switch from "react-toggle-switch";
import {Link} from "react-router-dom";

class PollWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultShow: false,
            resultPoll:null,
            resultPollIndex:0
        };
    }
    resultShowOnClick = (result, poll, pollIndex) => {
        this.setState(prevState => {
            return {
                resultShow: !prevState.resultShow
            };
        });

        const resultPoll=(
            <Fragment>
                {
                    (poll.option_1 !== null) ?

                        <Fragment>
                            <span>{poll.option_1}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_1+"%"}}>{result.option_1}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_2 !== null) ?

                        <Fragment>
                            <span>{poll.option_2}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_2+"%"}}>{result.option_2}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_3 !== null) ?

                        <Fragment>
                            <span>{poll.option_3}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_3+"%"}}>{result.option_3}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_4 !== null) ?

                        <Fragment>
                            <span>{poll.option_4}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_4+"%"}}>{result.option_4}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_5 !== null) ?

                        <Fragment>
                            <span>{poll.option_5}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_5+"%"}}>{result.option_5}%</div>
                            </div>
                        </Fragment>
                        :null
                }

                {
                    (poll.option_6 !== null) ?

                        <Fragment>
                            <span>{poll.option_6}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_6+"%"}}>{result.option_6}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_7 !== null) ?

                        <Fragment>
                            <span>{poll.option_7}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_7+"%"}}>{result.option_7}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_8 !== null) ?

                        <Fragment>
                            <span>{poll.option_8}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_8+"%"}}>{result.option_8}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_9 !== null) ?

                        <Fragment>
                            <span>{poll.option_9}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_9+"%"}}>{result.option_9}%</div>
                            </div>
                        </Fragment>
                        :null
                }
                {
                    (poll.option_10 !== null) ?

                        <Fragment>
                            <span>{poll.option_10}</span>
                            <div className="progress">
                                <div className="progress-bar" style={{width:result.option_10+"%"}}>{result.option_10}%</div>
                            </div>
                        </Fragment>
                        :null
                }
            </Fragment>



        )

        this.setState({resultPoll:resultPoll,resultPollIndex:pollIndex})
        // console.log(resultPoll);
    };
    render() {
        let widget = this.props.widget;
        console.log(this.state.resultPollIndex);
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
                                    <Link onClick={() =>this.resultShowOnClick(poll.result, poll, index)}>View Results</Link>
                                </form>


                                { this.state.resultShow === true && (
                                    <div className="progress-content">
                                        {
                                            index===this.state.resultPollIndex ?
                                                this.state.resultPoll
                                            :null

                                        }

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