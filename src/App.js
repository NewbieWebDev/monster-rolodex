import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';




class App extends React.Component {

  constructor(){
    super();

    this.state = {

      monsters: [],
      searchField:''
    }
    this.handleMonsters = this.handleMonsters.bind(this);
  }

  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users",{ mode: 'no-cors' })
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleMonsters(e){
    this.setState({
      searchField:e.target.value
    })
  }


  render(){
  const {monsters,searchField}= this.state;
  const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))  
  return (
    <div className="App">
  <h1>Monsters Rolodex</h1>
  <SearchBox
    placeholder='search monsters'
    handleChange={this.handleMonsters}
  />
  <CardList  monsters = {filteredMonsters}/>

    
 </div>
  );
  }
}

export default App;
