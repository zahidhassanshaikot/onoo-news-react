import React, {Component} from 'react';

class ChangePassword extends Component {
    render() {
        return (
            <>
                <div className="col-md-8">
                    <form className="author-form author-form-content" name="author-form" method="post" action="#">
                        <div className="form-group text-left mb-0">
                            <label>Old Password</label>
                            <input type="password" className="form-control" required="required"
                                   placeholder="***********"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>New Password</label>
                            <input type="password" className="form-control" required="required"
                                   placeholder="***********"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" required="required"
                                   placeholder="***********"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Change Password</button>
                    </form>
                </div>
            </>
        );
    }
}

export default ChangePassword;