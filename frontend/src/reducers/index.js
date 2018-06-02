import {combineReducers} from 'redux';
import NewsReducer from './NewsReducer';
import SearchBoxReducer from './SearchBoxReducer';

const reducers = combineReducers({
    news: NewsReducer,
    search: SearchBoxReducer  
});

export default reducers;
