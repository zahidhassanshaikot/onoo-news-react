import * as Types from '../actions/types'

const init={
    primary_section:{
        news:{
            slider_news:[],
            featured_news:[],
            breaking_news:[],
        }
        },
    dynamic_section:[{post:[]}],
    videos:[{image:{},user:{},video:{},category:{}}],
    latest_post:[],
}

const homeReducer =(state= init,action) =>{
    switch (action.type) {
        case Types.LOAD_HOME_CONTENT: {
            return action.payload.homeContent.data
        }
        default:return state
    }
}
export default homeReducer;