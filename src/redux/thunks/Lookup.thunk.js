import { searchNews } from "../../services/apiService";
import { search } from '../actions/Content.action';

export const LookupThunk = (newsItem) => async (dispatch) => {
  const response = await searchNews(newsItem);
  dispatch(search(response));
};
