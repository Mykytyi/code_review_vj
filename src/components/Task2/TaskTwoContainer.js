import { connect } from "react-redux";
import TaskTwo from './TaskTwo';

import {setData, inputSymbols, clearData, addTitle}  from '../../actions/actionCreator';

const mapStateToProps = (state) => {
  return {
    title: state.taskTwo.title,
    inputField: state.taskTwo.inputField,
    isInputFilled: state.taskTwo.isInputFilled,
    isEven: state.taskTwo.isEven
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: () => dispatch(addTitle()),
    clearData: () => dispatch(clearData()),
    setData: () => dispatch(setData()),
    inputSymbols: (event) => dispatch(inputSymbols(event))
  }
};

const TaskTwoContainer = connect(mapStateToProps, mapDispatchToProps)(TaskTwo);

export default TaskTwoContainer;