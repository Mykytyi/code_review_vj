import React, {Component} from 'react';
import './TaskThree.css';

class TaskThree extends Component {
  constructor() {
    super();
    this.state = {
      url: "http://localhost:63342/test/index.html?em=world&ew=book"
    }
  }

  changeValue(event) {
    event.preventDefault();
    this.setState({
      url: event.target.value
    });
  }

  parseUrl() {
    let value = this.state.url;
    let arrayOfParams = null;
    let outputObj = {};
    if (value.includes('?')) {
      arrayOfParams = value.match(/\?.+/)[0].slice(1).split('&');
      arrayOfParams.forEach((item) => {
        let keyValue = item.split('=');
        let key = keyValue[0];
        let value = keyValue[1] || null;
        outputObj[key] = value;
      });
      alert(JSON.stringify(outputObj));
    }
  }

  render() {
    return (
      <div className="taskThreeField">
          <h2>Task 3</h2>
        <div className="taskThreeFieldWrap">
          <input type="text" value={this.state.url} onChange={(event) => this.changeValue(event)}/>
          <button onClick={() => this.parseUrl()}>Parse</button>
        </div>
      </div>
    );
  }
}

export default TaskThree;