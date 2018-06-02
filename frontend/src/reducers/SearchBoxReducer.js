// ./src/reducers/NewsReducer.js
import { SET_TEXT } from '../types/SearchBoxText';

const initState = {
  text: ''
}

export default (state = initState, action) => {
	switch(action.type) {
	 case SET_TEXT :
	 	return { ...state, text: action.payload.text }
	 default :
	 	return state
	}
}