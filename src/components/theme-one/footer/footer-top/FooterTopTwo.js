import React, {Component} from 'react';
import SocialButton from "../../theme-icon/SocialButton";
import StyleFour350X82 from "../../post/StyleFour350x82";
import moment from "moment";

class FooterTopTwo extends Component {
    render() {
        let social_media = this.props.social_media;
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-content">
                            <div className="d-flex justify-content-lg-center">
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
                            <div className="row">
                                {
                                    this.props.widgets.map((widget, index)=>(
                                        widget.short_code === 'popular_posts' ?
                                            <div className="col-lg-4" key={index}>
                                                <div className="footer-widget">
                                                    <h3>{widget.title}</h3>
                                                    {
                                                        widget.popular_posts.daily.map((news, index) => (
                                                            <div className="sg-post small-post" key={index}>
                                                                <div className="entry-content p-0">
                                                                    <h2 className="entry-title"><a href="#">{news.title}</a></h2>
                                                                    <div className="entry-meta">
                                                                        <ul className="global-list">
                                                                            <li>By <a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                            :widget.short_code === 'recent_posts' ?
                                                <div className="col-lg-4" key={index}>
                                                <div className="footer-widget">
                                                    <h3>{widget.title}</h3>
                                                    {
                                                        widget.recent_posts.map((news, index)=>(
                                                            <div className="sg-post small-post" key={index}>
                                                                <div className="entry-content p-0">
                                                                    <h2 className="entry-title"><a href="#">{news.title}</a></h2>
                                                                    <div className="entry-meta">
                                                                        <ul className="global-list">
                                                                            <li>By <a href="#">{moment(news.created_at).format('MMM DD, YYYY')}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                </div>
                                            </div>
                                            :widget.short_code === 'newsletter' ?
                                                <div className="col-lg-4" key={index}>
                                                    <div className="footer-widget">
                                                        <h3>{widget.title}</h3>
                                                        <p>Subscribe to our mailing list to get latest news to your email inbox!</p>
                                                        <form action="#" className="newsletter-form">
                                                            <input type="email" className="form-control" required="required"
                                                                   id="one" placeholder="Your email address"/>
                                                            <button type="submit" className="btn btn-primary">Subscribe</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            :null
                                    ))
                                }

                                {/*<div className="col-lg-4">*/}
                                {/*    <div className="footer-widget">*/}
                                {/*        <h3>Popular posts</h3>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By <a href="#">May 4, 2020</a></li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By <a href="#">May 4, 2020</a></li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By <a href="#">May 4, 2020</a></li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="col-lg-4">*/}
                                {/*    <div className="footer-widget">*/}
                                {/*        <h3>EDITOR PICKS</h3>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By <a href="#">May 4, 2020</a></li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By <a href="#">May 4, 2020</a></li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <div className="sg-post small-post">*/}
                                {/*            <div className="entry-content p-0">*/}
                                {/*                <h2 className="entry-title"><a href="#">On 'SNL,' Elizabeth Warren*/}
                                {/*                    taxes to Jeff Bezos like small child</a></h2>*/}
                                {/*                <div className="entry-meta">*/}
                                {/*                    <ul className="global-list">*/}
                                {/*                        <li>By May 4, 2020</li>*/}
                                {/*                    </ul>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterTopTwo;