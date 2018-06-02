// ./src/actions/newsActions.js
import Axios from 'axios';
import { FETCH_NEWS_SUCCESS , FETCH_NEWS_FAILURE  } from '../types/News';

let SERVER_URL='http://localhost:3001/';
let API_TOPHEADLINES='v1/api/topheadlines';
let API_EVERYTHING='v1/api/everything';

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
     payload: {
        news
     }
  }
};

export const fetchNewsFailure = () => {
  return {
    type: FETCH_NEWS_FAILURE,
     payload: {
      error : 'Error receiving news'
     }
  }
};

export const fetchNews = (keywords) => {
  let apiUrl = SERVER_URL + API_TOPHEADLINES;
  if(keywords){
  	apiUrl = SERVER_URL + API_EVERYTHING + '?q=' + encodeURIComponent(keywords);	
  }	
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(fetchNewsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchNewsFailure())
      });
  };
};