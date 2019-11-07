import {initialState} from './initialState';
import {ACTIONS} from '../constants.js';

export function taskTwo(state = initialState.htmlForm, action) {
  switch (action.type) {
    case ACTIONS.HTML_FORM.ADD_TITLE:
      return {
        ...state,
        title: action.title,
        isEven: action.isEven
      };
    case ACTIONS.HTML_FORM.INPUT_SYMBOLS:
      return {
        ...state,
        inputField: action.inputField,
        isInputFilled: action.isInputFilled
      };
    case ACTIONS.HTML_FORM.SET:
      return {
        ...state,
        inputField: '',
        isInputFilled: action.isInputFilled
      };
    case ACTIONS.HTML_FORM.CLEAR:
      return {
        ...state,
        inputField: action.inputField,
        isInputFilled: action.isInputFilled,
        title: action.title
      };
    default:
      return state;
  }
}