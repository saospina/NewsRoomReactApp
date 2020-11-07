import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { ContentThunk } from "../../redux/thunks/Content.thunk";
import { HomeThunk } from '../../redux/thunks/Home.thunk';

const mapStateToProps = ({ ContentReducer }) => {
  return {
    newsToShow: ContentReducer
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
