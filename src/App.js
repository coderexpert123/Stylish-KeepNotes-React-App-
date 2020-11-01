import logo from './logo.svg';
import './App.css';
 
import React from 'react';
import  Listitems from './Listitems';
import  {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class  App extends React.Component{

  constructor(props){

    super(props);
    this.state={

      items:[],
      currentItem:{

        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.assItem=this.assItem.bind(this);
  }

  handleInput(e){

    this.setState({

      currentItem:{
        text:e.target.value,
        key:Date.now()

      }
    })
  }



assItem(e){

  e.preventDefault();
  const newItem=this.state.currentItem;
  
  if(newItem.text!==""){

    const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{

        text:'',
        key:''
      }
    })
  }

}


  render(){
    return(
   <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.assItem}>
          <input type="text" placeholder="Enter text"
          value={this.state.currentItem.text} onChange={this.handleInput}
          />
          <button type="submit">Add Task</button>
        </form>
      </header>
      <Listitems items={this.state.items}></Listitems>
   </div>
    )
  }
}
export default App;
