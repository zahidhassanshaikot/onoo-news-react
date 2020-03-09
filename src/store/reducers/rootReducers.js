import  {combineReducers} from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import settingReducer from "./settingReducer";



const rootReducer=combineReducers({
    auth:authReducer,
    settingContent:settingReducer,
    homeContent:homeReducer,
});

export default rootReducer;