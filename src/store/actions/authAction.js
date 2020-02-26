import * as Type from './types'
import Axios from "axios";
import jwtDecode from 'jwt-decode';
import setAuthToken from "../../utils/setAuthToken";

export const register = (user,history) => dispatch=> {
    Axios('register',{
        method: 'POST',
        data: user,
        headers: {
            // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
            'localization':'bn'
        }
    })

    // Axios.post('register',user,{
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    // })
        .then(res=>{
            // console.log(res);
            dispatch({
                type:Type.USER_ERROR,
                payload:{
                    error:{}
                }
            });
            history.push('/sign-in');
        })
        .catch(error =>{
            // console.log(error.response);
            dispatch({
                type:Type.USER_ERROR,
                payload:{
                    error:error.response.data
                }
            })
        })
}

export const login =(user,history)=>dispatch=>{

    Axios.post('login',user)
        .then(res=>{
            let token = res.data.data;
            // let token = 'Bearer '+ res.data.data;
            localStorage.setItem('auth_token',token);
            setAuthToken(token);
            let decode=jwtDecode(token);
            console.log(decode.name);
            dispatch({
                type: Type.SET_USER,
                payload:{
                    user:decode,
                    error:{ }
                }
            })
            history.goBack();
        })
        .catch(error=>{
            dispatch({
                type:Type.USER_ERROR,
                payload:{
                    error:error.response.data
                }
            })
        })
}
export const logout =(history)=>{

    localStorage.removeItem('auth_token');
    history.push('/');
    return {
        type:Type.SET_USER,
        payload:{
            user:{}
        }
    }
}