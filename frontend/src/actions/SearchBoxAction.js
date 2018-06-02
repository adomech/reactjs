// ./src/actions/SearchBoxAction.js
import { SET_TEXT } from '../types/SearchBoxText';
export const SetText = (text) => {
  return dispatch => {
    dispatch({
       type: SET_TEXT,
       payload: {
        text
       }
    })
  }
}