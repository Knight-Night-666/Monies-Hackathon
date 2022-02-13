pragma solidity >=0.4.21;
pragma experimental ABIEncoderV2;
// pragma solidity ^0.5.16;
contract Hospital {
    string public name;
    constructor () public {
        name = "National Hospital";
    }

    uint public doctorCount = 0;
    mapping(uint => Doctor) public doctors;

    uint public patientCount = 0;
    mapping(uint => Patient) public patients;

    struct Patient{
        uint id;
        string name;
        address payable pat_acc;
        string special;
        address payable doctor_account;
    }
    
	struct Doctor{
		uint id;
		string name;
        address payable doc_acc;
		uint Cons_fees;
		string specialisation;
        bool purchased;
	}
	
	event DoctorAdded(
        uint id,
        string name,
        address payable doctor_acc,
        uint fees,
        string special,
        bool purchased
    );
    event AppointmentPurchased(
        uint id,
        string name,
        address payable doctor_acc,
        uint fees,
        string special,
        bool purchased
    );

	

	function addDoctor(string memory _name, uint _fees, string memory _special) public {
        
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_fees > 0);
        // Increment doctor count
        doctorCount ++;
        // Add the doctor
        
        doctors[doctorCount] = Doctor(doctorCount, _name,(msg.sender),_fees, _special,false);
        // Triggering the event
        emit DoctorAdded(doctorCount, _name,(msg.sender), _fees, _special,false);
    }
    function addAppointment(uint _id,string memory _pat_nem,string memory _pat_spec) public payable {
        //create a patient
        //Patient storage pat = Patient(patientCount,_pat_nem,msg.sender,_pat_spec);
        address payable temp;
        temp=msg.sender; 
        
        //fetch the doctor
        Doctor memory _doctor = doctors[_id];
        
        //fetch the owner
        address payable _seller = _doctor.doc_acc;
        //mark as purchased
        _doctor.purchased = true;
        //update doctor
        doctors[_id] = _doctor;
        //pay the seller
        address(_seller).transfer(msg.value);
        //trigger an event
        patients[patientCount++]=Patient(patientCount,_pat_nem,msg.sender,_pat_spec,doctors[_id].doc_acc);
        
        emit AppointmentPurchased(doctorCount, _doctor.name,(msg.sender),   _doctor.Cons_fees, _doctor.specialisation,true);

    }
    
}