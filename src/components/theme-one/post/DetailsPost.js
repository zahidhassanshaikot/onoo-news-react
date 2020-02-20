import React, {Component} from 'react';

class DetailsPost extends Component {
    render() {
        return (
            <>
                <div className="sg-post">
                    <div className="entry-header">
                        <div className="entry-thumbnail">
                            <img
                                className="img-fluid"
                                src={ require("../../../assets/images/post/details.jpg") }
                                alt="Image"
                            />
                        </div>
                    </div>
                    <div className="entry-content p-4">
                        <h3 className="entry-title">Ran away farst score Through weakness of
                            will, whichis the same as saying through</h3>
                        <div className="entry-meta mb-2">
                            <ul className="global-list">
                                <li>
                                    <i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                    <a href="#">November 4, 2019</a>
                                </li>
                            </ul>
                        </div>
                        <p className="paragraph">There are many variations of passages of
                            Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which
                            don't look even slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there isn't anything
                            embarrassing hidden in the middle of to use a passage of Lorem
                            Ipsum, you need to be sure there isn't anything embarrassing
                            hidden in the middle All the Lorem Ipsum generators on the
                            Internet tend to repeat predefined chunks as necessary,
                            see....</p>
                    </div>
                </div>
            </>
        );
    }
}

export default DetailsPost;