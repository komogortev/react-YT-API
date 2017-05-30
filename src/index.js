import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyB4XvB31JeoVvbuUz7OtnEvfgafxiiyH-8';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('surf');
  }
  
  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term}, videos => { 
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      }) 
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
    
   return (
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            videos={this.state.videos} 
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          />
      </div>
    ); 
  }
}

//place generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));