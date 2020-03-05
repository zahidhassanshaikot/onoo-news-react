import  {combineReducers} from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import settingReducer from "./settingReducer";



const rootReducer=combineReducers({
    auth:authReducer,
    homeContent:homeReducer,
    settingContent:settingReducer,
});

export default rootReducer;