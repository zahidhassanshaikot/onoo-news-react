import * as Types from '../actions/types'
const init ={
    default_language: null,
    timezone: null,
    menu: [{menu_item:[{}]},{menu_item:[{}]},{menu_item:[{}]}],
    branding: {},
    seo: {},
    notification: {},
    social_media: {},
    ads: [{}],
    theme: [{}],
    categories: [{}],
    widgets: [{}]
}

const settingReducer =(state=init,action) =>{
    switch (action.type) {
        case Types.LOAD_SETTING_CONTENT: {
            return action.payload.settingContent.data
        }
        default:return state
    }
}
export default settingReducer;