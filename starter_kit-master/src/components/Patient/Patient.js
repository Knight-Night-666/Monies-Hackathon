import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Patient extends Component{
  render(){
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
                 !doctor.purchased
                 ? <button
                     name={doctor.id}
                     value={doctor.Cons_fees}
                     onClick={(event) => {
                       this.props.addAppointment(event.target.name,"xyz","chomu", event.target.value)
                       window.alert(doctor.id)
                     }}
                   >
                     Buy
                   </button>
                 : null
               }
                    
               </td>         
                    </tr>
                  )
              })}
          </tbody>
        </table>  
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