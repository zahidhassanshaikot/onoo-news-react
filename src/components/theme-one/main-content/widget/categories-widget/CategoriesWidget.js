import React, {Component} from 'react';

class CategoriesWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget categories-widget">
                    <h3 className="widget-title">Categories</h3>
                    <ul className="global-list">
                        <li><a href="#">Business <span>(145)</span></a></li>
                        <li><a href="#">Design <span>(20)</span></a></li>
                        <li><a href="#">Fashion <span>(15)</span></a></li>
                        <li><a href="#">Food & Drinks <span>(12)</span></a></li>
                        <li><a href="#">Head Phone <span>(56)</span></a></li>
                        <li><a href="#">Interior <span>(652)</span></a></li>
                        <li><a href="#">Laptop <span>(05)</span></a></li>
                        <li><a href="#">Robot <span>(22)</span></a></li>
                        <li><a href="#">Science <span>(11)</span></a></li>
                        <li><a href="#">Sport <span>(18)</span></a></li>
                        <li><a href="#">Technology <span>(32)</span></a></li>
                        <li><a href="#">Travel <span>(60)</span></a></li>
                    </ul>
                </div>
            </>
        );
    }
}

export default CategoriesWidget;