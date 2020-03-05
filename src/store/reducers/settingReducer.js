import * as Types from '../actions/types'

const settingReducer =(state=[],action) =>{
    switch (action.type) {
        case Types.LOAD_SETTING_CONTENT: {
            return action.payload.settingContent.data
        }
        default:return state
    }
}
export default settingReducer;