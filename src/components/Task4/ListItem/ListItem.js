import React from 'react';

import './ListItemStyles.css';

const ListItem = (props) => {
  const {id,
        title,
        name,
        imgUrl,
        options,
        price,
        currency} = props;
  let numPrice = +price;
  return (
    <li className="fourTaskListItem">
      <div className="fourTaskListItemNum">#{id}</div>
      <h3>{title}</h3>
      <p>{name}</p>
      <div className="imageWrap"><img src={imgUrl} alt="ring"/></div>
      <p className="optionsList">Product options:</p>
      <ul>
        <li>Metal type: {options[0].metal_type}</li>
        <li>Metal color: {options[0].metal_color}</li>
        <li>Stone shape: {options[0].stone_shape}</li>
        <li>Gem stone color: {options[0].gemstone_color}</li>
      </ul>
      <div className="price">{numPrice.toFixed(2) + currency}</div>
    </li>
  );
};

export default ListItem;