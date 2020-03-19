import React, {Component} from 'react';

class CategoriesWidget extends Component {
    render() {
        let widget = this.props.widget;
        let {categories} = {...widget};

        return (
            <>
                <div className="sg-widget categories-widget">
                    <h3 className="widget-title">{widget.title}</h3>
                    <ul className="global-list">
                        {
                            categories.map((category, index)=>(
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
            </>
        );
    }
}

export default CategoriesWidget;