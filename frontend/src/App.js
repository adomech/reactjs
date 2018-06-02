import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import {SetText} from './actions/SearchBoxAction';
import NewsList from './components/NewsList';
import * as NewsActions from './actions/NewsActions';

class App extends Component {
  
  _onChange = (value) => {
   
    this.props.dispatch(SetText(value));
    this.props.dispatch(NewsActions.fetchNews(value));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
         <h1>News Search </h1> 
         <SearchBox value={this.props.text} onChange={this._onChange} />
        
         <h1>News List</h1> 
         <NewsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
     return {
         text: state.search.text,
     }
 };

export default connect(mapStateToProps)(App);
