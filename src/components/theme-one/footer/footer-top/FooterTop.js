import React, {Component} from 'react';
import StyleFour350X82 from "../../post/StyleFour350x82";

class FooterTop extends Component {
    render() {
        return (
            <>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
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
                                         :widget.short_code === 'recent_posts' ?
                                             <div className="col-lg-4" key={index}>
                                                 <div className="footer-widget">
                                                     <h3>{widget.title}</h3>
                                                     {
                                                         widget.recent_posts.map((news, index)=>(
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

export default FooterTop;