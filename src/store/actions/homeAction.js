import * as Type from './types'
import Axios from "axios";

export const loadHomeContent = () => dispatch=> {
    Axios.get('home/content/')
        .then(response=>{
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
