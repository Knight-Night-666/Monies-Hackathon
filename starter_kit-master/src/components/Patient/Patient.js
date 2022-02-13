import React,{Component} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Appointment from '../Appointment/Appointment';

let renderappointment = null;
 
class Patient extends Component{
  
  
  
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      displayappointment: false,
      price: 0 

    }
  }
  

  render()
  {
    
    var flag=0;
    if ( this.state.displayappointment ) {
      return(
        
              // <Appointment 
              // index = {this.state.index} 
              // price = {this.state.price}
              // />

              <div id="content">
              <h1>Appointment</h1>
              <form onSubmit={(event) => {
                event.preventDefault()
                const name = this.name.value.toString()
                const age =  this.age.value.toString()
                const healthissue = this.healthiss.value.toString()
                const address = this.address.value.toString()
                const modeofappointment = this.modeofapppp.value.toString()
                const gender = this.gender.value.toString()
                const specialneedy = this.patientspecialneed.value.toString()
              this.props.addAppointment(this.state.index,name,age,healthissue,gender,modeofappointment,specialneedy,this.state.price)

              }}>
                <div className="form-group mr-sm-2">  
                  <input
                    id="patientName"
                    type="text"
                    ref={(input) => { this.name = input }}
                    className="form-control"
                    placeholder="Patient Name"
                    required />
                </div>
                
                <div className="form-group mr-sm-2">
                  <input
                    id="patientAge"
                    type="text"
                    ref={(input) => { this.age = input }}
                    className="form-control"
                    placeholder="Patient Age"
                    required />
                </div>
            <div className="form-group mr-sm-2">
                  {/* <input
                    id="patientGender"
                    type="text"
                    ref={(input) => { this.gender = input }}
                    className="form-control"
                    placeholder="Patient's Gender"
                    required /> */}
                    {/* <p>Select Gender: </p> */}
                    <input
                    id="gender"
                    type="text"
                    ref={(input) => { this.gender = input }}
                    className="form-control"
                    placeholder="Patient's Gender"
                    required />
                    {/* <select id="gender">
                <option value="Male">Male</option>
                <option value="Male">Female</option>
                      <option value="None">Others</option>
                </select> */}
                </div>
            <div className="form-group mr-sm-2">
                    {/* <p>Enter address</p> */}
                  <input
                    id="patientAddress"
                    type="text"
                    ref={(input) => { this.address = input }}
                    className="form-control"
                    placeholder="Patient's Address"
                    required />
                </div>
            <div className="form-group mr-sm-2">
            {/* <p> Health Problems that the patient is currently facing - </p> */}
                  <input
                    id="patientHealthIssue"
                    type="text"
                    ref={(input) => { this.healthiss = input }}
                    className="form-control"
                    placeholder="Patient Health Issue"
                    required />
                </div>
                <div>
                {/* <p> Mode of Appointment - </p> */}
                <input
                    id="modeofapp"
                    type="text"
                    ref={(input) => { this.modeofapppp = input }}
                    className="form-control"
                    placeholder="Mode of Appointment (Online/ Clinic)"
                    required />
                {/* {<select id="modeofapp">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                </select>} */}
                </div>
                <br></br>
                <div>
                {/* <p>Patient With Special Needs ?</p> */}
                <div className="form-group mr-sm-2">
                  <input
                    id="patientspecialneedy"
                    type="text"
                    ref={(input) => { this.patientspecialneed = input }}
                    className="form-control"
                    placeholder="Special needs (Yes/No)"
                    required />
                </div>
                </div>
            
                
                <button type="submit" className="btn btn-primary">Book Appointment</button>
                
              </form>
            </div>
      
      )
    } 
    else if(!this.state.displayappointment)
    return(
      
      <div id="content">
          <h2>Doctors</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Fees</th>
              <th scope="col">Specialisation</th>
              <th scope="col"></th>

            </tr>
          </thead>
          <tbody id="doctorLst">
              {this.props.doctors.map((doctor,key) => {
                  return (
                    <tr key={key}>
                        <th scope="row">{doctor.id.toString()}</th>
                        <td>{doctor.name}</td>
                        <td>{window.web3.utils.fromWei(doctor.Cons_fees.toString(),'Ether')} Eth</td>
						<td>{doctor.specialisation}</td>
             <td>
               {
                      // <Link to='/Appointment/Appointment'>
                     <button
                        name={doctor.id}
                        value={doctor.Cons_fees}
                        onClick={(event) => {
                          this.setState({index: doctor.id})
                          // window.alert(this.state.index)
                          this.setState({displayappointment: true})
                          this.setState({price: doctor.Cons_fees})
                           

                        }}
                      >
                        I choose you 
                      </button>
                      // </Link>
                      
                    
               }
                    
               </td>         
                    </tr>
                  )
              })}
          </tbody>
        </table> 
        
        {/* <Appointment
        
        index = {this.state.index}
        
        /> */}


        
        {renderappointment}
        
         
      </div>
           
    );
  }

}





// const Patient = () => {
//   return  <div> 
//     <div className="main">
//     {/* <h2>Doctors</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Fees</th>
//               <th scope="col">id</th>
//               <th scope="col">Specialisation</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody id="doctorLst">
//               {this.props.doctors.map((doctor,key) => {
//                   return (
//                     <tr key={key}>
//                         <th scope="row">{doctor.id.toString()}</th>
//                         <td>{doctor.name}</td>
//                         <td>{window.web3.utils.fromWei(doctor.Cons_fees.toString(),'Ether')} Eth</td>
//                         <td>{doctor.doc_acc}</td>
// 						<td>{doctor.specialisation}</td>
//                     </tr>
//                   )
//               })}
//           </tbody>
//         </table>  */}
//     </div>
     
    
// </div>;

// };

export default Patient;