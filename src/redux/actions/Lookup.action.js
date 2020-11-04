export const SEARCH = "SEARCH";

// action creator
export const search = (newsItem) => ({
  type: SEARCH,
  payload: { newsItem }
});
