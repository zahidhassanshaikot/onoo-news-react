import React, {Component} from 'react';
import ToggleButton from "./ToggleButton";
import moment from "moment";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "./../../../../store/actions/authAction"

class Topbar extends Component {

    constructor() {
        super();
        this.state = {
            curTime: null,
            date:moment().format('dddd, DD MMMM YYYY')
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime :moment().format('h:mm:ss A')
            })
        },1000)
    }

    render() {
        return (
            <>
                <div className="sg-topbar">
                    <div className="container">
                        <div className="d-md-flex justify-content-md-between">
                            <div className="left-contennt">
                                <ul className="global-list">
                                    <li><i className="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        {this.state.date}, {this.state.curTime}
                                    </li>
                                </ul>
                            </div>
                            <div className="right-content d-flex">
                                <div className="d-flex">
                                    <div className="submit-news">
                                        <a href="#">Submit News</a>
                                    </div>
                                    <div className="submit-news">
                                        <ToggleButton/>
                                    </div>
                                    <div className="sg-language">
                                        <select>
                                            <option value="">English</option>
                                            <option value="">English</option>
                                            <option value="">English</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="sg-social mr-md-5">
                                        <ul className="global-list">
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        this.props.auth.isAuthenticated ?
                                            <React.Fragment>
                                                <div className="sg-user">
                                                <span><i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
                                                    <Link onClick={()=>this.props.logout(this.props.history)}>Logout</Link>
                                                </span>
                                                </div>
                                            </React.Fragment>
                                            :
                                            <React.Fragment>
                                                <div className="sg-user">
                                                <span><i className="fa fa-user-circle mr-2" aria-hidden="true"></i>
                                                    <Link to="/sign-in">Login</Link> / <Link to="/sign-up"> SignUp</Link>
                                                </span>
                                                </div>
                                            </React.Fragment>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}
const mapStateToProps = state =>({
    auth:state.auth
})

export default withRouter(connect(mapStateToProps,{logout})(Topbar));