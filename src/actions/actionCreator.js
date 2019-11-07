import {ACTIONS} from '../constants';

export const addTitle = (isEven) => {
  let title = localStorage.getItem('num23');
  return {
    type: ACTIONS.HTML_FORM.ADD_TITLE,
    title: title,
    isEven: isEven
  }
};

export const setData = () => {
  return (dispatch, getState) => {
    let number = getState().taskTwo.inputField;
    let isEven = (number % 2 === 0);
    if (localStorage.getItem('num23')) {
      localStorage.removeItem('num23');
      localStorage.setItem('num23', number);
    } else {
      localStorage.setItem('num23', number);
    }
    dispatch(addTitle(isEven));
    dispatch(cleanInput());
  }
};

const cleanInput = () => {
  return {
    type: ACTIONS.HTML_FORM.SET,
    isInputFilled: false
  }
};

export const inputSymbols = (event) => {
  event.preventDefault();
  let num = '';
  let isInputFilled = false;
  if (event.target.value.length > 0) {
    num = +event.target.value;
    isInputFilled = true;
  } else {
    num = '';
    isInputFilled = false;
  }
  return {
    type: ACTIONS.HTML_FORM.INPUT_SYMBOLS,
    inputField: num,
    isInputFilled: isInputFilled
  }
};

export const clearData = () => {
  localStorage.removeItem('num23');
  return {
    type: ACTIONS.HTML_FORM.CLEAR,
    inputField: '',
    isInputFilled: false,
    title: ''
  }
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Task Four~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const loadData = () => {
  return (dispatch) => {
    const promise = fetch("https://cors-anywhere.herokuapp.com/http://54.39.188.42/", {
      method: 'GET'
    });
    promise
      .then(response => {
        return response.text()
      })
      .then(response => {
        let array = JSON.parse(atob(response));
        dispatch(importArticles(array));
      });
  }
};

const importArticles = (articles) => {
  return {
    type: ACTIONS.LIST_OF_PRODUCTS.IMPORT_ARTICLES,
    articles: articles
  }
};