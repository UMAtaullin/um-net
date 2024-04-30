import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import messengerReducer from "./messengerReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    sidebar: sidebarReducer
});

let store = legacy_createStore(reducers);


export default store;
