import React, {Component} from 'react';

class SocialAccount extends Component {
    render() {
        return (
            <>
                <div className="col-md-8">
                    <form className="author-form author-form-content" name="author-form" method="post"
                          action="#">
                        <div className="form-group text-left mb-0">
                            <label>Facebook Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.facebook.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Twitter Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.twitter.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Instagram Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.instagram.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Pinterest Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.pinterest.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Linkedin Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.linkedin.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>VK Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.vk.com"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Telegram Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://web.telegram.org"/>
                        </div>
                        <div className="form-group text-left mb-0">
                            <label>Youtube Url</label>
                            <input type="text" className="form-control" required="required"
                                   placeholder="https://www.youtube.com"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Change</button>
                    </form>
                </div>
            </>
        );
    }
}

export default SocialAccount;