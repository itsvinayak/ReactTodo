import React,{ Component } from 'react';
import { TaskList } from './TaskList';

class App extends Component{
  constructor(){
    super();
    this.state = {
      items: [],
      value: ''
    }
  }

  addValue = ( item ) => {
    this.setState(
      {value: item.target.value}
    )
  };

  addItem = ( e ) => {
    e.preventDefault();
    this.setState(
      {
        value:'',
        items: [...this.state.items, this.state.value]
      }
    )
  };

  delItem = (e) =>{
    this.setState({
      items: this.state.items.filter(item => item !== e)
    });
  };

  render(){
    return (
      <div>
        <div className="ui container" style={{marginTop:"5%"}}>
           <TaskList items = {this.state.items} deleteItem={this.delItem}/>
        </div>

      <div className="ui segment fixed sticky bottom" style={ { width:"100%" }}>
      <form onSubmit={ (e) => this.addItem(e)} className="ui fluid focus input">
        <input type="text"
          placeholder="item to add . . . "
          onChange={this.addValue}
          value={this.state.value}
        />
      </form>
      </div>
    </div>

    );
  }
}


export default App;
