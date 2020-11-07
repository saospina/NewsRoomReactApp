export const SHOW_CATEGORIES = "SHOW_CATEGORIES";
export const SHOW_LATEST = "SHOW_LATEST";
export const SEARCH = "SEARCH";

// action creator
export const showCategories = (category) => ({
  type: SHOW_CATEGORIES,
  payload: { category }
});
export const showLatest = (currentDate) => ({
  type: SHOW_LATEST,
  payload: { currentDate }
});
// action creator
export const search = (newsItem) => ({
  type: SEARCH,
  payload: { newsItem }
});
