import React, { Component } from 'react';

class Main extends Component {

  //fucntion to check if the doctor exists already
  check() {
    var account = this.props.account
    // window.alert(this.props.doctors.length)
    for(var i = 0; i <this.props.doctors.length; i++) {
      if(account==this.props.doctors[i].doc_acc)
      return i
    }
    return -1
  }

  render() {
    var i = this.check()
    if(i==-1)
    return (
      <div id="content">
        <h1>Add Doctor</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.name.value
          const price = window.web3.utils.toWei(this.fees.value.toString(), 'Ether')
		  const special = this.special.value
          this.props.addDoctor(name, price, special)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="doctorName"
              type="text"
              ref={(input) => { this.name = input }}
              className="form-control"
              placeholder="Doctor Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="doctorFees"
              type="text"
              ref={(input) => { this.fees = input }}
              className="form-control"
              placeholder="Doctor Fees"
              required />
          </div>
		  <div className="form-group mr-sm-2">
            <input
              id="doctorSpecial"
              type="text"
              ref={(input) => { this.special = input }}
              className="form-control"
              placeholder="Doctor Specialisation"
              required />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        <p>&nbsp;</p>
        {/* <h2>Doctors</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Fees</th>
              <th scope="col">id</th>
              <th scope="col">Specialisation</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="doctorList">
              {this.props.doctors.map((doctor,key) => {
                  return (
                    <tr key={key}>
                        <th scope="row">{doctor.id.toString()}</th>
                        <td>{doctor.name}</td>
                        <td>{window.web3.utils.fromWei(doctor.Cons_fees.toString(),'Ether')} Eth</td>
                        <td>{doctor.doc_acc}</td>
						<td>{doctor.specialisation}</td>
                    </tr>
                  )
              })}
          </tbody>
        </table> */}
      </div>
    );
    else
    return(
      <div className="form-group mr-sm-2">
      <h2>Hello Dr. {this.props.doctors[i].name}</h2>
      <h4>Here are your Appointments</h4>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Age</th>
              <th scope="col">Health issue</th>
              <th scope="col">gender</th>
              <th scope="col">Mode of Appointment</th>
              <th scope="col">Special Need?</th>
            </tr>
          </thead>
          <tbody id="doctorList">
              {this.props.patients.map((patient,key) => {
                if(this.props.account==patient.doctor_account)
                  return (
                    <tr key={key}>
                        <th scope="row">{patient.id.toString()}</th>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.healthIssue}</td>
                        <td>{patient.gender}</td>
						            <td>{patient.modeofappointment}</td>
                        <td>{patient.specialneedy}</td>
                    </tr>
                  )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;