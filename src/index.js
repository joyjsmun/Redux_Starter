import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyBYa0Et0YG4NofVji1z9xEHndNjOYvsDLA';

//create new component. this component should produce html

//"const" is one of es6 component. declaring the variable. Immutable(never gonna change)

//jsx .. javascript can produce html. really  complext javascript components => make the code a lot more clean and legible

// type of component. 'class component' this is class not a instance. 
// class(blueprint) ex) factory which make the notebook => instance() ex) notebook
// Inside the function produce the lots of instance component. that's why it become a factory.

// '=>' function keyword ES6


class App extends Component{
  
  constructor(probs){   // whenever there is new search, we need to coduct 
    super(probs);
    
    this.state = {videos :[] };   // empty array
    
YTSearch({key: API_KEY ,term :'surfboards'}, (videos) =>{  // when the search is done, they update the state
    this.setState({videos});  // this.setState({videos；videos)
    
    console.log(videos);
    
  });
}
  
  
  /*parent component : App , child : VideoList*/
  /*whenever App rander, VideoList get the videos from App*/
  
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>  
        
         
      </div>
      );
  }
}


//Take this components generated html and put in the page in the DOM
//ReactDOM is touch the DOM directly.interact. create and manage the component
//instantiate < App/>
// make the target element for component instant
    
ReactDOM.render(< App/>, document.querySelector('.container'));

