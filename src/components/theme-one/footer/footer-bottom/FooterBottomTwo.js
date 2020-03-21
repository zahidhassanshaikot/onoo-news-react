import React, {Component} from 'react';
import logo from '../../../../assets/images/logo.png'
import SocialButton from "../../theme-icon/SocialButton";

class FooterBottomTwo extends Component {
    render() {
        let social_media = this.props.social_media;
        let branding = this.props.branding;
        return (
            <>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <div className="logo">
                            <img
                                src={branding.logo}
                                // src="images/footer-logo.png"
                                alt="siteLogo"
                                className="img-fluid"
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="sg-socail">
                                <ul className="global-list d-flex">
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
                        <span>Copyright &copy; 2019 {branding.application_name} - All Rights Reserved.</span>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterBottomTwo;