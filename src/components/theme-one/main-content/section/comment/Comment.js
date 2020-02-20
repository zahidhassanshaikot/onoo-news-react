import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return (
            <>
                <div className="commenter-avatar">
                    <a href="#">
                        <img className="img-fluid"
                             src={require("../../../../../assets/images/others/author.png")}
                             alt="Image"
                        />
                    </a>
                </div>
                <div className="comment-box media-body">
                    <div className="comment-meta">
                                            <span className="title">
                                                <a href="#" className="url">Michel Jawad</a>
                                                <span className="sg-date">2 minutes ago</span>
                                            </span>
                    </div>
                    <div className="comment-content">
                        <p>And he knows that it's not enough for just
                            some of us to prosper. Not this time. Now is
                            the time to end this addiction, and to
                            understand that drilling is a stop-gap
                            measure, not a long-term solution.</p>
                    </div>
                    <span className="sg-reply"> <a href="#">Reply</a></span>
                </div>
            </>
        );
    }
}

export default Comment;