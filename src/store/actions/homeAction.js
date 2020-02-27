import * as Type from './types'
import Axios from "axios";

export const loadHomeContent = () => dispatch=> {
    Axios('home/content/',{
        method: 'GET',
        headers: {
            // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
            'localization':'en'
        }
    })
        .then(response=>{
            console.log(response);
            dispatch({
                type:Type.LOAD_HOME_CONTENT,
                payload:{
                    homeContent:response.data
                }
            })

        })
        .catch(error =>{

        })
}
