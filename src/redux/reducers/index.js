import { combineReducers } from 'redux'
import LookupReducer from './Lookup.reducer';
import ContentReducer from './Content.reducer';


 const rootReducer = combineReducers({
  ContentReducer,
  LookupReducer 
});

export default rootReducer;