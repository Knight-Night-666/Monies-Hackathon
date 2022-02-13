import React, { Component } from 'react';

class Appointment extends Component {

  render() {
    return (
      <div id="content">
        <h1>Appointment</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.name.value
          const age =  this.age.value
		  const healthissue = this.healthiss.value
		  const gender = this.gender.value
            var select = document.getElementById('gender');
            var valuee = select.options[select.selectedIndex].value;
		  const address = this.address.value
		    var select1 = document.getElementById('modeofapp');
		    var valuee1 = select1.options[select1.selectedIndex].value;
		  const modeofappointment =  valuee1
            var select2 = document.getElementById('patientWithSpecialNeed');
		        var valuee2 = select2.options[select2.selectedIndex].value;
		  const specialneedy = valuee2 
          //this.props.addAppointment(uint _id,string memory _pat_nem,string memory _pat_spec)
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
              <p>Select Gender: </p>
              <select id="gender">
    			<option value="1">Male</option>
    			<option value="2">Female</option>
                <option value="3">Others</option>
			    </select>
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
          <p> Mode of Appointment - </p>
          <select id="modeofapp">
    			<option value="1">Online</option>
    			<option value="2">Offline</option>
			    </select>
          </div>
          <div>
          <p>Patient With Special Needs ?</p>
          <select id="patientWithSpecialNeed">
    			<option value="1">Yes</option>
    			<option value="2">No</option>
			    </select>
          </div>
		  
            
		{/* <div className="form-group mr-sm-2">
            <input
              id="patientWithSpecialNeed"
              type="text"
              ref={(input) => { this.specialneed = input }}
              className="form-control"
              placeholder="Yes/No"
              required />
          </div> */}
          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </form>
      </div>
    );
  }
}

export default Appointment;