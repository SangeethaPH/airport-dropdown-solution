import React,{Component} from 'react';
import './App.scss';
import Dropdown from './Dropdown';
import * as airportList from './AirportListFile';

class App extends Component{
  constructor(props){
    super();
    this.state={
      loading:true
    }
  }
  componentWillMount(){

  }
  componentDidMount(){
    this.setState({loading:false})
  }

  render(){
    let {loading} = this.state;
    return(
      <div className="container">
      <h1 style={{ textAlign: 'center',backgroundColor:'lightGrey',marginTop:"10%" }}>
        Choose Airport{' '}
      </h1>
      {loading && <div>Fetching data from a file........</div>}
      {!loading && <Dropdown title="AirportChooser" items={airportList.items}/>}
    </div>
    )
  }
}

export default App;
