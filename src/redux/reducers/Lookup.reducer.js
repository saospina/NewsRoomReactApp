import { SEARCH } from "../actions/Lookup.action";


const LookupReducer = (state = [], action) => {
    if (action.type === SEARCH) {
        return action.payload.newsItem;
    }
    return state;
};

export default LookupReducer;
