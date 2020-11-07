import { connect } from "react-redux";

import { LookupComponent } from './LookupComponent';
import { LookupThunk } from '../../redux/thunks/Lookup.thunk';

const mapDispatchToProps = (dispatch) => {
  return {
    searchNews: (newsItem) => {
      dispatch(LookupThunk(newsItem));
    }
  };
};

export default connect(null, mapDispatchToProps)(LookupComponent);
