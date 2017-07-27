import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import YT_API from '../api_key.js';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {videos: []};

    YTSearch({key: YT_API, term: 'surfboards'}, (videos) => {
      this.setState({videos})
    });
  }
  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
