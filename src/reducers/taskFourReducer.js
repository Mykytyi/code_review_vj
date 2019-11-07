import {initialState} from './initialState';
import {ACTIONS} from '../constants.js';

export function taskFour(state = initialState.listOfProducts, action) {
  switch (action.type) {
    case ACTIONS.LIST_OF_PRODUCTS.IMPORT_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };
    default:
      return state;
  }
}