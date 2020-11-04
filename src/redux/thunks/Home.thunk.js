import { showLatest } from "../actions/Content.action";
import { getLatestNews } from "../../services/apiService";

export const HomeThunk = (currentDate) => async (dispatch) => {
  console.log(currentDate, 'date in thunk');
  const response = await getLatestNews(currentDate);
  dispatch(showLatest(response));
};
