import React, {Component} from 'react';
import Comment from "./Comment";

class SectionComment extends Component {
    render() {
        return (
            <>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>Comment / replay from</h1>
                        </div>
                        <form className="contact-form" name="contact-form" method="post"
                              action="#">
                            <div className="row">
                                {/*<div className="col-lg-6">*/}
                                {/*    <div className="form-group">*/}
                                {/*        <label htmlFor="one">Name</label>*/}
                                {/*        <input type="text" className="form-control"*/}
                                {/*               required="required" id="one"*/}
                                {/*               placeholder="admin"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="col-lg-6">*/}
                                {/*    <div className="form-group">*/}
                                {/*        <label htmlFor="two">Email</label>*/}
                                {/*        <input type="email" className="form-control"*/}
                                {/*               required="required" id="two"*/}
                                {/*               placeholder="demo@gmail.com"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="four">Comments</label>
                                        <textarea name="message" required="required"
                                                  className="form-control" rows="7"
                                                  id="four"
                                                  placeholder="this is message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Post
                                    comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="sg-section">
                    <div className="section-content">
                        <div className="sg-comments-area">
                            <div className="section-title">
                                <h1>Comments</h1>
                            </div>
                            <ul className="comment-list global-list">
                                <li className="media">
                                    <Comment/>
                                    <ul className="children global-list">
                                        <li className="media">
                                            <Comment/>
                                            <ul className="children global-list">
                                                <li className="media">
                                                    <Comment/>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="media">
                                    <Comment/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionComment;