import React, {Component} from 'react';

class UpdateProfile extends Component {
    render() {
        return (
            <>
                <div className="col-md-8">
                    <div className="author-form-content">
                        <div className="author">
                            <img
                                className="img-fluid"
                                src={require("../../../../../assets/images/others/author1.png")}
                                alt="Image"
                            />
                        </div>
                        <form className="author-form" name="author-form" method="post" action="#">
                            <div className="form-group text-left mb-0">
                                <input type="file" id="1111"/>
                                <label htmlFor="1111">Select Image</label>
                            </div>
                            <div className="form-group text-left mb-0">
                                <label>First Name</label>
                                <input type="text" className="form-control" required="required"
                                       placeholder="admin"/>
                            </div>
                            <div className="form-group text-left mb-0">
                                <label>Last Name</label>
                                <input type="text" className="form-control" required="required"
                                       placeholder="admin"/>
                            </div>
                            <div className="form-group text-left mb-0">
                                <label>Email</label>
                                <input type="email" className="form-control" required="required"
                                       placeholder="demo@gmail.com"/>
                            </div>
                            <div className="form-group text-left mb-0">
                                <label>About Me</label>
                                <textarea className="form-control"
                                          placeholder="this is message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Save Change</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default UpdateProfile;