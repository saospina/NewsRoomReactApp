import { searchNews } from "../../services/apiService";
import { search } from '../actions/Lookup.action';

export const LookupThunk = (newsItem) => async (dispatch) => {
  console.log(newsItem, 'lookup in thunk');
  const response = await searchNews(newsItem);
  dispatch(search(response));
};
