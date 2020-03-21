import React, {Component} from 'react';
import StyleFour350X82 from "../../post/StyleFour350x82";

class FooterTopThree extends Component {
    render() {
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-widget about-widget">
                                        <h3>ABOUT US</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text since
                                            has five...</p>
                                        <ul className="global-list">
                                            <li><i className="fa fa-home mr-2" aria-hidden="true"></i>
                                                {this.props.branding.address}
                                            </li>
                                            <li><i className="fa fa-volume-control-phone mr-2"
                                                   aria-hidden="true"></i> {this.props.branding.phone}
                                            </li>
                                            <li><i className="fa fa-envelope-o mr-2" aria-hidden="true"></i> <a
                                                href="#">{this.props.branding.email}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {
                                    this.props.widgets.map((widget, index)=>(
                                        widget.short_code === 'popular_posts' ?
                                            <div className="col-lg-4" key={index}>
                                                <div className="footer-widget">
                                                    <h3>{widget.title}</h3>
                                                    {
                                                        widget.popular_posts.daily.map((news, index) => (
                                                            <StyleFour350X82
                                                                key={index}
                                                                news={news}
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            :widget.short_code === 'categories' ?
                                                <div className="col-lg-4" key={index}>
                                                    <div className="footer-widget categories-widget">
                                                        <h3>{widget.title}</h3>
                                                        <ul className="global-list">
                                                            {
                                                                widget.categories.map((category, index)=>(
                                                                    <li key={index}>
                                                                        <a href="#">
                                                                            {category.category_name}
                                                                            <span>
                                                                                 ({category.post_count})
                                                                             </span>
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                :null
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterTopThree;