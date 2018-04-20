import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/vedio_detail';
import YTSearch from 'youtube-api-search';
// Create a new component
const API_KEY = 'AIzaSyBKKlOZXryegsW0arpTKdMswPIDpP--ikY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null
    };

    YTSearch({
      key: API_KEY,
      term: 'epic music'
    }, (videos) => {
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
      });
    })
  }
  render() {
    return (<div>
      <SearchBar></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
      <VideoList videos={this.state.videos}></VideoList>
    </div>);

  }
}

ReactDOM.render(<App></App>, document.querySelector('.container'));
// Take this component's generated html and put it on the page
