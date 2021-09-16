
import React,{ Component } from 'react';
//import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import addTelephone from './components/addTelephone';
import deletePhone from './components/deletePhone';
import editTelephone from './components/editTelephone';
import TelephoneDetails from './components/TelephoneDetails';
import search from './components/search';
import page from './components/page';
import NavBar from './components/NavBar';


export default class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
      
      <div className ="container">
         <NavBar/>
          
         <Route path ="/" exact component={search}></Route>
         <Route path ="/home" exact component={Home}></Route>
         <Route path="/add" component ={addTelephone}></Route>
         <Route path ="/delete" component={deletePhone}></Route>
         <Route path = "/edit/:id" component={editTelephone}></Route>
         <Route path = "/phone/:id" component={TelephoneDetails}></Route>
         <Route path ="/ss" exact component={page}></Route>
        
       
      </div>
      </BrowserRouter>
    )
  }
}

