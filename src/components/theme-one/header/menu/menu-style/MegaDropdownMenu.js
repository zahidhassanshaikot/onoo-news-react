import React, {Component} from 'react';
import StyleThree160X181 from "../../../post/StyleThree160x181";

class MegaDropdownMenu extends Component {
    render() {
        return (
            <>
                <li className="sg-dropdown mega-dropdown" key={this.props.uniqueKey}>
                    <a href="#">{this.props.label}<span>
                        <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </a>
                    <div className="sg-dropdown-menu mega-dropdown-menu">
                        <div className="mega-menu-content">
                            <div className="row">
                                <div className="col-md-2">
                                    <ul className="nav nav-tabs" role="tablist">
                                        {
                                            this.props.category.subcategory.map((subcategory,index)=>(

                                                <li className="nav-item" key={index}>
                                                    <a className={(index === 0) ? 'nav-link active' : 'nav-link'} id={subcategory.slug+'-tab'}
                                                       data-toggle="tab" href={'#'+subcategory.slug} role="tab"
                                                       aria-controls={subcategory.slug} aria-selected={(index === 0) ? true : false}>{ subcategory.sub_category_name }</a>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <div className="col-md-10">
                                    <div className="tab-content" id="myTabContent">
                                        {
                                            this.props.category.subcategory.map((subcategory,index)=>(
                                                <div key={index} className={(index === 0) ? 'tab-pane fade show active' : 'tab-pane fade'} id={subcategory.slug} role="tabpanel" aria-labelledby={subcategory.slug+'-tab'}>
                                                    <div className="row">
                                                        {
                                                            subcategory.post.map((post,index)=>(
                                                                <div className="col-md-6 col-lg-3" key={index}>
                                                                    <StyleThree160X181
                                                                        news={post}
                                                                    />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        );
    }
}

export default MegaDropdownMenu;