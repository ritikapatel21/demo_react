import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
    session: sessionReducer,
    form: formReducers,
    })

export default rootReducer;