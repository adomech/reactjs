// ./src/reducers/NewsReducer.js
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
          return action.payload.news;
    case 'FETCH_NEWS_FAILURE':
          return action.payload.error;      
    default:
          return state;
  }
};