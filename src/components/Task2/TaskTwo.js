import React, {Component} from 'react';

import './TaskTwoStyles.css';

class TaskTwo extends Component {
  componentDidMount() {
    if(localStorage.getItem('num23')) {
      this.props.addTitle();
    }
  }

  render() {
    const {
      isInputFilled,
      inputField,
      title,
      inputSymbols,
      setData,
      clearData,
      isEven} = this.props;
    let parColor = isEven ? 'green' : 'red';
    return (
      <div className="taskTwoField">
        <h2>Task 2</h2>
        <p className="taskTwoTitle" style={{color: parColor}}>{title}</p>
        <form>
          <input type="number"
                 placeholder="Input some numbers"
                 value={inputField}
                 onChange={(event) => inputSymbols(event)}/>
          <div className="buttonsWrap">
            <input type="submit"
                   value="Set"
                   disabled={!isInputFilled}
                   onClick={(event) => {
              event.preventDefault();
              return setData();
            }}/>
            <input type="button" value="Clear" onClick={() => clearData()}/>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskTwo;