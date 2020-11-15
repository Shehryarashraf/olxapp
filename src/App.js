import React,{Component} from 'react';
import Footer from './component/Footer/Footer';
import BottomFooter from './component/BottomFooter/BottomFooter';
import './component/Footer/style.css'
import './component/BottomFooter/style.css'
import './App.css';


class App extends Component{
  // constructor(){
  //   super()


  render(){
    return(
      <div className="app">
     
        <Footer/>
        <BottomFooter/>
      </div>
    )
  }
}

export default App;
