import { connect } from "react-redux";
import TaskFour from './TaskFour';

import {loadData} from '../../actions/actionCreator';

const mapStateToProps = (state) => {
  return {
    articles: state.taskFour.articles
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData())
  }
};

const TaskFourContainer = connect(mapStateToProps, mapDispatchToProps)(TaskFour);

export default TaskFourContainer;