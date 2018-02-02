//{} pull off the varible from React
import React,{Component} from 'react';






/* declare the class
'extends' give functionality from React.Component class
must difine the render method , and then "return jsx" */

//start with functional component first and then if you wants to add aditional functionality then change to class-based compoents
class SearchBar extends Component{
    
    
    /*intialize the State. Ony class based component has the state*/
    constructor(props){
        super(props);   // component has theire own states
        
        this.state = {term: ""}  //setting the state  "this.setState"  : only way can update the state 
        
        
    }
    
    
    
    
    render() {
        
        return (
        
        <input 
            value={this.state.term}
         onChange = {event => this.setState({term: event.target.value})} />   // update the state by functional handler
        //input element tell whether change or not
        );
    }
    
    
    
/*
how to handle the event handler
1. declare the event handler
2. pass event handler to the elements which you want to watch

*/

    /*
    onInputChange(event){
        console.log(event.target.value);
    }
    */
    
}


export default SearchBar;





/*whenever state got changed, inside the component re-render */
/*need to initialize the state*/