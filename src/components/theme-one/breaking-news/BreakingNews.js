import React, {Component} from 'react';

class BreakingNews extends Component {
    render() {
        return (
            <>
                <div className="sg-breaking-news">
                    <div className="container">
                        <div className="breaking-content d-flex">
                            <span>Breaking News</span>
                            <ul className="news-ticker">
                                <li><a href="#">Plastic is being recycled into fuel and this cannabis company wants
                                    in</a></li>
                                <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BreakingNews;