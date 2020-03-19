import React, {Component} from 'react';
import SocialButtonTwo from "../../../theme-icon/SocialButtonTwo";

class SocialWidget extends Component {
    render() {
        let widget = this.props.widget;
        return (
            <>
                <div className="sg-widget widget-social">
                    <h3 className="widget-title">{widget.title}</h3>

                    <div className="sg-socail">
                        <ul className="global-list">
                            <SocialButtonTwo
                                url={widget.follow_us.fb_url}
                                label="Facebook"
                                icon_class="fa fa-facebook"
                                li_class="facebook"
                            />
                            <SocialButtonTwo
                                url={widget.follow_us.youtube_url}
                                label="Youtube"
                                icon_class="fa fa-youtube-play"
                                li_class="youtube"
                            />
                            <SocialButtonTwo
                                url={widget.follow_us.twitter_url}
                                label="Twitter"
                                icon_class="fa fa-twitter"
                                li_class="twitter"
                            />
                            <SocialButtonTwo
                                url={widget.follow_us.linkedin_url}
                                label="Linkedin"
                                icon_class="fa fa-linkedin"
                                li_class="linkedin"
                            />
                            <SocialButtonTwo
                                url={widget.follow_us.pinterest_url}
                                label="Pinterest"
                                icon_class="fa fa-pinterest-square"
                                li_class="pinterest"
                            />
                            <SocialButtonTwo
                                url={widget.follow_us.instagram_url}
                                label="Instagram"
                                icon_class="fa fa-instagram"
                                li_class="instagram"
                            />
                            {/*<SocialButtonTwo*/}
                            {/*    url=""*/}
                            {/*    label="Skype"*/}
                            {/*    icon_class="fa fa-skype"*/}
                            {/*    li_class="skype"*/}
                            {/*/>*/}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default SocialWidget;