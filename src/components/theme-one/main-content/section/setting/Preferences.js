import React, {Component} from 'react';

class Preferences extends Component {
    render() {
        return (
            <>
                <div className="col-md-8">
                    <form action="#" className="radio-form author-form-content">
                        <h3>Show Email on Profile Page</h3>
                        <div className="row mb-5">
                            <div className="col-6 col-md-4">
                                <input type="radio" name="sellType" id="yes"/>
                                    <label htmlFor="yes">Yes</label>
                            </div>
                            <div className="col-6 col-md-4">
                                <input type="radio" name="sellType" id="no"/>
                                    <label htmlFor="no"> No</label>
                            </div>
                        </div>
                        <h3>RSS Feeds</h3>
                        <div className="row mb-4">
                            <div className="col-6 col-md-4">
                                <input type="radio" name="sellType1" id="enable"/>
                                    <label htmlFor="enable">Enable</label>
                            </div>
                            <div className="col-6 col-md-4">
                                <input type="radio" name="sellType1" id="disable"/>
                                    <label htmlFor="disable">Disable</label>
                            </div>
                        </div>
                        <button className="btn btn-primary">Save Change</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Preferences;