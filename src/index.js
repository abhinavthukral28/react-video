import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
// Create a new component
const API_KEY = 'AIzaSyBKKlOZXryegsW0arpTKdMswPIDpP--ikY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({
      key: API_KEY,
      term: 'epic music'
    }, (videos) => {
      this.setState({videos});
    })
  }
  render() {
    return (<div>
      <SearchBar></SearchBar>
      <VideoList videos={this.state.videos}></VideoList>
    </div>);

  }
}

ReactDOM.render(<App></App>, document.querySelector('.container'));
// Take this component's generated html and put it on the page
