import * as Type from './types'
import Axios from "axios";

export const loadSettingsContent = () => dispatch=> {
    Axios('settings',{
        method: 'GET',
        headers: {
            // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
            'localization':'en'
        }
    })
        .then(response=>{
            // console.log(response);
            dispatch({
                type:Type.LOAD_SETTING_CONTENT,
                payload:{
                    settingContent:response.data
                }
            })

        })
        .catch(error =>{

        })
}
