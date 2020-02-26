import  {combineReducers} from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";



const rootReducer=combineReducers({
    auth:authReducer,
    homeContent:homeReducer,
});

export default rootReducer;