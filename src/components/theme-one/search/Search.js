import React, {Component} from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state={
            search_key: ''
        }

    }
    componentDidMount() {
    }

    changeHandler=event=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }
    submitHandler=event=>{
        event.preventDefault();
        let {search_key}=this.state;
    }

    render() {
        return (
            <>
                <div className="sg-search">
                    <div className="search-form">
                        <form onSubmit = { this.submitHandler } name="search_key" onChange={this.changeHandler} id="search" >
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