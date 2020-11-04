import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { ContentThunk } from "../../redux/thunks/Content.thunk";
import { HomeThunk } from '../../redux/thunks/Home.thunk';

/* const getVisibleNews = (content, lookup) => {
  console.log(content, lookup);
  if (content.length < 0) {
    return lookup;
  } else {
    if (lookup.length < 0) {
      return content;
    }
  }
}; */
//getVisibleNews(ContentReducer, LookupReducer)
const mapStateToProps = ({ ContentReducer, LookupReducer }) => {
  return {
    newsToShow: LookupReducer ? LookupReducer : ContentReducer 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    byCategory: (category) => {
      dispatch(ContentThunk(category));
    },
    byLatest: (currentDate) => {
      dispatch(HomeThunk(currentDate))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
