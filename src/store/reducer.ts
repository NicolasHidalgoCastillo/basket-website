import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import menu from "./slice/menu";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  menu: menu,
});

export default reducer;
