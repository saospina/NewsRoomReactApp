import { showCategories } from "../actions/Content.action";
import { getByCategory } from "../../services/apiService";

export const ContentThunk = (category) => async (dispatch) => {
  const response = await getByCategory(category);
  dispatch(showCategories(response));
};
