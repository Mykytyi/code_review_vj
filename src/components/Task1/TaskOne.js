import React, {Component} from 'react';

import './TaskOneStyles.css';

class TaskOne extends Component {
  constructor() {
    super();
    this.state = {
      string: "",
      outputArray: ['null', 0]
    };
  }

  checkInput(event) {
    event.preventDefault();
    if (event.target.value) {
      let arrayOfChars = [];
      const inputValue = event.target.value;
      this.setState({
        string: inputValue,
      });
      const arrayFromInputValue = inputValue.toLowerCase().split('');

      for (let i of arrayFromInputValue) {
        if (!arrayOfChars.includes(i)) {
          let amount_of_i_in_arrayFromInputValue = 0;

          arrayFromInputValue.forEach((item) => {
            if (item === i) {
              amount_of_i_in_arrayFromInputValue++;
            }
          });
          arrayOfChars.push([i, amount_of_i_in_arrayFromInputValue]);
        }
        let arrForOutput = arrayOfChars[0];
        arrayOfChars.forEach((item) => {
          if (item[1] > arrForOutput[1]) {
            arrForOutput = item;
          }
        });
        this.setState({
          outputArray: arrForOutput
        });
      }
    } else {
      this.setState({
        string: "",
        outputArray: ['null', 0]
      });
    }
  }

  render() {
    return (
      <div className="taskOneField">
        <div className="taskOneFieldWrap">
          <h2>Task 1</h2>
          <form>
            <input type="text" value={this.state.string} onChange={(event) => this.checkInput(event)} placeholder="Input some symbols"/>
          </form>
          <div className="paragraphOne">The most frequent character: {this.state.outputArray[0]}</div>
          <div>Amount of characters: {this.state.outputArray[1]}</div>
        </div>
      </div>
    );
  }
}

export default TaskOne;