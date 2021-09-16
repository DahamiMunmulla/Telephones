
import React,{ Component } from 'react';
import axios from 'axios';

export default class App extends Component{

  onSubmit =(e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;
    const{PID,PhoneNumber,BID, SID,month,Date} = this.state;

    const data ={
      PID:PID,
      PhoneNumber:PhoneNumber,
      BID:BID,
      SID:SID,
      month:month,
      Date:Date
    }

      console.log(data)
      axios.put(`/phone/update/${id}`,data).then((res) =>{
        if(res.data.success){
          alert("Added Successfully!")
           this.setState({
               PID:"",
               PhoneNumber:"",
               BID:"",
               SID:"",
               month:"",
               Date:""
           }
           )
          }
      });
     
  }


  
  componentDidMount(){
    const id = this.props.match.params.id;

   axios.get(`/phone/${id}`).then((res) =>{
       if(res.data.success){
           alert("Phone updated Sucessfully")
           this.setState({
             phones:res.data.post
          });
           console.log(this.state.phones);
       }
    });
   } 
  
    render() {
      return(
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal"> ADD TELEPHONES</h1>
            <form className="needs-validation" noValidate>
               <div className="form-group"  style={{marginBottom:'15px'}}>
                 <label style={{marginBottom:'5px'}}> PID </label>
                 <input type="text"
                 className="form-control"
                 name="PID"
                 placeholder="enter phoneID"
                 value={this.state.PID}
                 onChange={this.handleInputChange}/>
                 </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label style={{marginBotton:'5px'}}>Telephone Number</label>
                    <input type ="text"
                    className="form-control"
                    name="PhoneNumber"
                    placeholder="Enter BuildingID"
                    value={this.state.PhoneNumber}
                    onChange={this.handleInputChange}/>
                </div>
                
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label style={{marginBotton:'5px'}}>BID</label>
                    <input type="text"
                    className="form-control"
                    name="BID"
                    placeholder="Enter Description"
                    value={this.state.BID}
                    onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label style={{marginBotton:'5px'}}>SID</label>
                    <input type="text"
                    className="form-control"
                    name="SID"
                    placeholder="Enter StockID"
                    value={this.state.SID}
                    onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label style={{marginBotton:'5px'}}>Month</label>
                    <input type="text"
                    className="form-control"
                    name="month"
                    placeholder="Enter Month you add the phone"
                    value={this.state.month}
                    onChange={this.handleInputChange}/>
                </div>
    
                <div className="form-group" style={{marginBotton:'15px'}}>
                    <label style={{marginBotton:'5px'}}>Date</label>
                    <input type="text"
                    className="form-control"
                    name="Date"
                    placeholder="Enter Year you add the phone"
                    value={this.state.Date}
                    onChange={this.handleInputChange}/>
                </div>
    
               
                
                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                 &nbsp; Update
                </button>
                  
             </form>
             </div>
        
        )
      }
    
  }

