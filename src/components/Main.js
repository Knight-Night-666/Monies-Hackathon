import React, { Component } from 'react';

class Main extends Component {

  render() {
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
        <h2>Doctors</h2>
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
        </table>
      </div>
    );
  }
}

export default Main;