import React, {Component} from 'react';
import TaskOne from "../components/Task1/TaskOne";
import TaskTwoContainer from "../components/Task2/TaskTwoContainer";
import TaskThreeContainer from "../components/Task3/TaskThreeContainer";
import TaskFourContainer from "../components/Task4/TaskFourContainer";

import './VjTestTasksStyles.css';

class VjTestTasks extends Component {
  render() {
    return (
      <div className="tasksWrap">
        <TaskOne/>
        <TaskTwoContainer/>
        <TaskThreeContainer/>
        <TaskFourContainer/>
      </div>
    );
  }
}

export default VjTestTasks;