import { combineReducers } from "redux";
import listCalendarReducer from '../container/Home/Calendar/module/reducer'
import userReducer from '../container/SignIn/module/reducer'
import userSignUpReducer from '../container/SignUp/module/reducer'
import listUserReducer from '../container/Home/Chat/module/reducer'

import listTaskReducer from '../container/Home/ManageTask/module/reducer'
import listAccountReducer from '../container/Admin/ManageAccount/module/reducer'

const rootReducer = combineReducers({
    listCalendarReducer,
    userReducer,
    userSignUpReducer,
    listUserReducer,
    listTaskReducer,
    listAccountReducer
});
export default rootReducer