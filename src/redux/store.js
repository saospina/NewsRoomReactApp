import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


//import ContentReducer from "./reducers/Content.reducer";
import rootReducer from './reducers/index'
//import LookupReducer from "./reducers/Lookup.reducer";


export const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState(),'este es el get state')

