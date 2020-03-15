import React, {Component} from 'react';
import ToggleButton from "./ToggleButton";
import moment from "moment";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "./../../../../store/actions/authAction"
import SocialButton from "../../theme-icon/SocialButton";

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
        let {menu, languages, default_language, social_media} = this.props.settingContent;
        // console.log(languages);
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
                                        <select className="border-0 bg-transparent">
                                            {
                                                languages.map((item,index)=>(
                                                    // console.log(language)
                                                    <option selected = {(item.code === default_language) ? true : false} value={item.code} key={index}>{item.name}</option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="sg-social mr-md-5">
                                        <ul className="global-list">
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-facebook"
                                                url={social_media.fb_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-twitter"
                                                url={social_media.twitter_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-google-plus"
                                                url={social_media.google_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-linkedin"
                                                url={social_media.linkedin_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-pinterest"
                                                url={social_media.pinterest_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-youtube-play"
                                                url={social_media.youtube_url}
                                            />
                                            <SocialButton
                                                li_class=""
                                                i_class="fa fa-instagram"
                                                url={social_media.instagram_url}
                                            />
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

                                                    <Link to="/sign-in">Login</Link> /
                                                    <Link to="/sign-up"> SignUp</Link>
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
    auth:state.auth,
    settingContent:state.settingContent
})

export default withRouter(connect(mapStateToProps,{logout})(Topbar));