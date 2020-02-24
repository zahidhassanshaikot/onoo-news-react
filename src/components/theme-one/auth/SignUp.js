import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {register} from "./../../../store/actions/authAction"

class SignUp extends Component {

    state={
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        password_confirmation:'',
        error:{},
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(JSON.stringify(nextProps.auth.error) != JSON.stringify(prevState.error)){
            return {
                error:nextProps.auth.error
            }
        }
        return null;
    }
    changeHandler=event=>{
        this.setState({
            [event.target.name]:event.target.value

        })
    }
    submitHandler=event=>{
        let {first_name, last_name, email,password,password_confirmation}=this.state;
        event.preventDefault()
        this.props.register({first_name, last_name,email,password,password_confirmation},this.props.history)
    }


    render() {
        let {first_name, last_name, email, password, password_confirmation, error}=this.state;
        return (
            <>
                <div className="ragister-account text-center">
                    <div className="container">
                        <div className="account-content">
                            <h1>Sign Up</h1>
                            <form className="ragister-form" name="ragister-form" onSubmit={this.submitHandler}>
                                <div className="form-group text-left mb-0">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        required="required"
                                        placeholder="admin"
                                        value={first_name}
                                        onChange={this.changeHandler}
                                    />
                                    { error.first_name && <label className="text-danger"> {error.first_name} </label>}

                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="last_name"
                                        required="required"
                                        placeholder="admin"
                                        value={last_name}
                                        onChange={this.changeHandler}
                                    />
                                    { error.last_name && <label className="text-danger"> {error.last_name} </label>}

                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required="required"
                                        placeholder="demo@gmail.com"
                                        value={email}
                                        onChange={this.changeHandler}
                                    />
                                    { error.email && <label className="text-danger"> {error.email} </label>}
                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        required="required"
                                        placeholder="***********"
                                        value={password}
                                        onChange={this.changeHandler}
                                    />
                                    { error.password && <label className="text-danger"> {error.password} </label>}
                                </div>
                                <div className="form-group text-left mb-0">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password_confirmation"
                                        required="required"
                                        placeholder="***********"
                                        value={password_confirmation}
                                        onChange={this.changeHandler}
                                    />
                                    { error.password_confirmation && <label className="text-danger"> {error.password_confirmation} </label>}
                                </div>
                                <button type="submit">Sign Up</button>
                                <div className="middle-content">
                                    <p>Already have an account?
                                        <Link to="/sign-in">Login</Link>
                                    </p>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <div className="buttons">
                                    <a className="facebook" href="#">
                                        <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                        login with facebook
                                    </a>
                                    <a className="google-plus" href="#">
                                        <span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
                                        login with google plus
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps=(state)=>({
    auth: state.auth
})

export default connect(mapStateToProps,{register})(SignUp);