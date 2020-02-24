import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "./../../../store/actions/authAction"

class SignIn extends Component {

    state={
        email:'',
        password:'',
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
        event.preventDefault();
        let {email,password}=this.state;
        this.props.login({email,password},this.props.history)
    }

    render() {
        console.log(this.props);
        let {email, password, error}=this.state;

        return (
            <>
                <div className="ragister-account text-center">
                    <div className="container">
                        <div className="account-content">
                            <h1>Login</h1>
                            <form className="ragister-form" name="ragister-form" onSubmit={this.submitHandler}>
                                <div className="form-group text-left mb-0">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        // required="required"
                                        placeholder="demo@gmail.com"
                                        value={email}
                                        onChange={this.changeHandler}
                                    />
                                    { error.email && <label className="text-danger"> {error.email} </label>}
                                    { error.error && <label className="text-danger"> {error.error} </label>}
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
                                <button type="submit">Login</button>
                                <div className="middle-content">
                                    <p>Don't have an account? <Link to="sign-up">Sign Up</Link></p>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <div className="buttons">
                                    <a className="facebook" href="#">
                                        <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                        login with facebook
                                    </a>
                                    <a className="google-plus" href="#">
                                        <span><i className="fa fa-google-plus" aria-hidden="true"></i></span>
                                        login with google plus</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps=state=>({
    auth:state.auth
});
export default connect(mapStateToProps,{login})(SignIn);