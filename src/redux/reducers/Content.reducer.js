import { SHOW_CATEGORIES, SHOW_LATEST } from "../actions/Content.action";

const initialState = [
  {
    id: 1,
    name: "sergio"
  },
  {
    id: 2,
    name: "antonio"
  }
];

const ContentReducer = (state = initialState, action) => {
  if (action.type === SHOW_CATEGORIES) {
    return action.payload.category;
  } else if (action.type === SHOW_LATEST) {
    return action.payload.currentDate;
  }
  return state;
};

export default ContentReducer;
