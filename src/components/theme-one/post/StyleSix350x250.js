import React, {Component} from 'react';

class StyleSix350X250 extends Component {
    render() {
        return (
            <>
                <div className="sg-post featured-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <a href="details.html">
                                <img className="img-fluid"
                                     src={ require("../../../assets/images/post/25.jpg") }
                                     alt="Image"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="entry-content absolute">
                        <div className="category">
                            <ul className="global-list">
                                <li><a href="#">Technology</a></li>
                            </ul>
                        </div>
                        <h2 className="entry-title">
                            <a href="details.html">Football manager's rage-fuelled reaction
                                becomes a glorious meme</a>
                        </h2>
                        <div className="entry-meta">
                            <ul className="global-list">
                                <li>By <a href="#">Mahananda</a></li>
                                <li><a href="#">November 4, 2019</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default StyleSix350X250;