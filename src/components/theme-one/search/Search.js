import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <>
                <div className="sg-search">
                    <div className="search-form">
                        <form action="#" id="search" method="get">
                            <input className="form-control" name="search" type="text"
                                   placeholder="Search here.."/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;