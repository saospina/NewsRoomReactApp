import { SHOW_CATEGORIES, SHOW_LATEST, SEARCH } from "../actions/Content.action";

const ContentReducer = (state = [], action) => {
  if (action.type === SHOW_CATEGORIES) {
    return action.payload.category;
  } else if (action.type === SHOW_LATEST) {
    return action.payload.currentDate;
  } else if (action.type === SEARCH) {
    return action.payload.newsItem;
  }
  return state;
};

export default ContentReducer;
