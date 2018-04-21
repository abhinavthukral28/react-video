import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/vedio_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// Create a new component
const API_KEY = 'AIzaSyCUI_N3lBE_vTmFi9Fu6BKA6Y140dpfz8I';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("Epic Music");
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
        return (<div>
            <SearchBar onSearchTermChange={term => videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
            />
        </div>);

    }
}

ReactDOM.render(<App></App>, document.querySelector('.container'));
// Take this component's generated html and put it on the page
