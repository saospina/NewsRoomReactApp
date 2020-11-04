export const SHOW_CATEGORIES = "SHOW_CATEGORIES";
export const SHOW_LATEST = "SHOW_LATEST";

// action creator
export const showCategories = (category) => ({
  type: SHOW_CATEGORIES,
  payload: { category }
});
export const showLatest = (currentDate) => ({
  type: SHOW_LATEST,
  payload: { currentDate }
});
