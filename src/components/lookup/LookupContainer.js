import { connect } from "react-redux";

import { LookupComponent } from './LookupComponent';
import { LookupThunk } from '../../redux/thunks/Lookup.thunk';

//mapea los props
/* const mapStateToProps = (state) => {
  return {
    searchedNews: state
  };
}; */

const mapDispatchToProps = (dispatch) => {
  return {
    searchNews: (newsItem) => {
      dispatch(LookupThunk(newsItem));
    }
  };
};

export default connect(null, mapDispatchToProps)(LookupComponent);
