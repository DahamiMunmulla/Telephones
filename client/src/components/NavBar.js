
import React,{ Component } from 'react';





export default class NavBar extends Component{
  
  render(){
      return(
    <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <button class="btn btn-outline-success" type="button">Add Telephones </button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Edit Telephones Numbers</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>

  </form>
      
</nav>
)
     
  }
}
