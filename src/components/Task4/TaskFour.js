import React, {Component} from 'react';
import './TaskFour.css';

import ListItem from "./ListItem/ListItem";

class TaskFour extends Component {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {articles} = this.props;
    return (
      <div className="taskFourField">
        <h2>Task 4</h2>
        <p>Products:</p>
        <div className="containerOfProducts">
          <ul className="mainList">{articles.map((item, id) => {
            console.log();
            return <ListItem key={id}
                             id={item.id}
                             title={item.title}
                             name={item.sku}
                             imgUrl={item.image}
                             options={item.options}
                             price={item.price}
                             currency={item.currency}/>
          })}</ul>
        </div>
      </div>
    );
  }
}

export default TaskFour;