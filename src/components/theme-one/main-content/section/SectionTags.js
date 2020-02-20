import React, {Component} from 'react';

class SectionTags extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>Tags</h1>
                        </div>

                        <div className="tagcloud tagcloud-style-1">
                            <a href="#">Action</a>
                            <a href="#">Animation</a>
                            <a href="#">Apple</a>
                            <a href="#">Cricket</a>
                            <a href="#">Animator</a>
                            <a href="#">Food</a>
                            <a href="#">Computer</a>
                            <a href="#">Games</a>
                            <a href="#">Sports</a>
                            <a href="#">Health</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionTags;