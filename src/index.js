//google api key 



import React from 'react';
import ReactDOM from 'react-dom';
//create new component. this component should produce html

//"const" is one of es6 component. declaring the variable. Immutable(never gonna change)

//jsx .. javascript can produce html. really  complext javascript components => make the code a lot more clean and legible

//type of component. 'class component' this is class not a instance. 
//class(blueprint) ex) factory which make the notebook => instance() ex) notebook
// Inside the function produce the lots of instance component. that's why it become a factory.

// '=>' function keyword ES6

const API_KEY = 'AIzaSyBYa0Et0YG4NofVji1z9xEHndNjOYvsDLA';

const App = () => {
  
    return <div>Hi</div>
}


//Take this components generated html and put in the page in the DOM

//ReactDOM is touch the DOM directly.interact. create and manage the component
  
    //instantiate < App/>
    // make the target element for component instant
    
ReactDOM.render(< App/>, document.querySelector('.container'));

