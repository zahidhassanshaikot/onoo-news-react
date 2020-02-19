import React, {Component} from 'react';

class NewsletterWidget extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <h3 className="widget-title">Newsletter</h3>
                    <div className="widget-newsletter text-center">
                        <div className="icon">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <p>Subscribe to our mailing list to get the new updates!</p>

                        <form action="#" className="tr-form">
                            <input type="email" className="form-control" placeholder="Email address" required/>
                            <button type="submit">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsletterWidget;