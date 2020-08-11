import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss'
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';
 class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList/>
      </React.Fragment>

      
    )
  }
}
export default App; 