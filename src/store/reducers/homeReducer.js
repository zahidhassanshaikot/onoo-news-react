import * as Types from '../actions/types'

const homeReducer =(state=[],action) =>{
    switch (action.type) {
        case Types.LOAD_HOME_CONTENT: {
            return action.payload.homeContent.data
        }
        default:return state
    }
}
export default homeReducer;