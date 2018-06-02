import React from 'react';
import {connect} from 'react-redux';
import NewsDetails from '../components/NewsDetails'
import {Link} from 'react-router-dom';

class NewsDetailsContainer extends React.Component {
    

    render() {
        return (
            <div className="container">
                <Link to='/'>
                   <button>Go homepage</button>
                </Link>
                <h1>News Details Page</h1>
                <NewsDetails {...this.props} />
                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
     return {
         news: state.news,
     }
 };

export default connect(mapStateToProps)(NewsDetailsContainer);