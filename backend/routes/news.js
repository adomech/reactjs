var express = require('express');
var router = express.Router();

const url = require('url');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

/* GET Top head line news. */
router.get('/topheadlines', (request, response , next) => {
	  
	newsapi.v2.topHeadlines({
	 language: 'en',
  	 country: 'gb'
	}).then(data => {
	   response.send(data);
	});
});

/* GET news filter by keywords. */
router.get('/everything', (request, response , next) => {
	  
	var urlParts = url.parse(request.url, true);
	var parameters = urlParts.query;
	var query = parameters.q;
	
	newsapi.v2.everything({
	 q: query,
	 language: 'en',
	 sortBy: 'publishedAt',
	}).then(data => {
	  response.send(data);
	});

});

module.exports = router;