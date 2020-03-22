import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import logo from '../../../../assets/images/logo.png';
import HeaderAdTwo from "../../ads/HeaderAdTwo";
import moment from "moment";
import SocialButton from "../../theme-icon/SocialButton";
import {connect} from "react-redux";
import {logout} from "../../../../store/actions/authAction";

class TopBarThree extends Component {
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
        let {languages, default_language, social_media, branding} = this.props.settingContent;
        return (
            <>
                <div className="sg-topbar topbar-style-1">
                    <div className="container">
                        <div className="d-md-flex justify-content-md-between">
                            <div className="left-contennt d-flex">
                                <div className="weather-content d-flex mr-5">
                                    <div className="weather mr-3">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28.216" height="16"
                                             viewBox="0 0 28.216 16">
                                          <g data-name="Group 974" transform="translate(0 -103.838)">
                                            <g data-name="Group 973">
                                              <g data-name="Group 254" transform="translate(0 103.838)">
                                                <g data-name="Group 253" transform="translate(0 0)">
                                                  <path id="Path_139" data-name="Path 139"
                                                        d="M25.358,109.286a4.384,4.384,0,0,0-6.463-3.848,7.986,7.986,0,0,0-11.089,1.471,4.391,4.391,0,0,0-5.369,4.282,4.272,4.272,0,0,0,.2,1.292,3.765,3.765,0,0,0,1.111,7.355H22.569a5.644,5.644,0,0,0,2.789-10.552ZM22.569,118.9H3.746a2.824,2.824,0,0,1-.408-5.614.471.471,0,0,0,.358-.667,3.311,3.311,0,0,1-.317-1.427,3.444,3.444,0,0,1,4.464-3.294.471.471,0,0,0,.531-.172,7.047,7.047,0,0,1,9.832-1.625q.182.13.355.272a.471.471,0,0,0,.552.032,3.444,3.444,0,0,1,5.3,3.131.471.471,0,0,0,.259.452,4.7,4.7,0,0,1-2.1,8.913Z"
                                                        transform="translate(0 -103.838)" fill="#fff"/>
                                                </g>
                                              </g>
                                              <g data-name="Group 256" transform="translate(10.805 108.544)">
                                                <g data-name="Group 255" transform="translate(0 0)">
                                                  <path data-name="Path 140"
                                                        d="M185.312,188.8a2.353,2.353,0,0,1,3.328-3.328l.665-.665a3.294,3.294,0,1,0,0,4.659l-.665-.665A2.353,2.353,0,0,1,185.312,188.8Z"
                                                        transform="translate(-183.681 -183.839)" fill="#fff"/>
                                                </g>
                                              </g>
                                              <g data-name="Group 258" transform="translate(16.452 106.662)">
                                                <g data-name="Group 257" transform="translate(0 0)">
                                                  <path data-name="Path 141"
                                                        d="M281.09,151.839a1.412,1.412,0,1,0,1.412,1.412A1.412,1.412,0,0,0,281.09,151.839Zm0,1.882a.471.471,0,1,1,.471-.471A.471.471,0,0,1,281.09,153.721Z"
                                                        transform="translate(-279.678 -151.839)" fill="#fff"/>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                    </span>
                                        <span><strong>30 ° C</strong> Dhaka City</span>
                                    </div>
                                    <div className="date">
                                        <span><strong>{this.state.date}</strong></span>
                                        {/*<span><strong>11</strong>Jan, saturday</span>*/}
                                    </div>
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
                            <div className="right-content d-flex align-self-center">
                                <div className="sg-social">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <Link className="navbar-brand align-self-center" to="/">
                                <img
                                    src={branding.logo}
                                    alt="Logo"
                                    className="img-fluid"
                                />
                            </Link>
                            <HeaderAdTwo/>

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

export default withRouter(connect(mapStateToProps,{logout})(TopBarThree));