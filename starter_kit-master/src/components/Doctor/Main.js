import React, { Component, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './Main.css'
import { useAnimation, motion } from "framer-motion/dist/es/index";
import { useInView } from "react-intersection-observer";

class Main extends Component {

  render() {
    return (
      <div id="add_doc_page">
        
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.name.value
          const price = window.web3.utils.toWei(this.fees.value.toString(), 'Ether')
		  const special = this.special.value
          this.props.addDoctor(name, price, special)
        }}>
          <div className="docadd_doctor">
            <img src='assets/addDoctor/doctor.png' height="100%"/>
          </div>
          <div className='docadd_heading'>
                <img src = 'assets/addDoctor/Doctor_Details.png' height = "100%"/>
          </div>
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
          {/* <motion.div className='sb2booknow'  onClick={()=>{
                navigate("/Patient/Patient")
            }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                
                <img src = 'assets/landing/subpage2/Book_Now_butt.png' height = "100%"/>
            </motion.div> */}
          <button type="submit" className="btn btn-primary">Add Doctor</button>
        </form>
        {/* <p>&nbsp;</p>
        <h2>Doctors</h2> */}
        {/* <table className="table">
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
  }
}

export default Main;