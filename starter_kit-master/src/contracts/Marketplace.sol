pragma solidity >=0.4.21;

contract Hospital {
    string public name;
    constructor () public {
        name = "National Hospital";
    }
    uint public doctorCount = 0;
    mapping(uint => Doctor) public doctors;

    struct Doctor{
        uint id;
        string name;
        address payable doc_acc;
        uint Cons_fees;
        string specialisation;
    }
    event DoctorAdded(
        uint id,
        string name,
        address payable doctor_acc,
        uint fees,
        string special
    );

    function addDoctor(string memory _name, uint _fees, string memory _special) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_fees > 0);
        // Increment doctor count
        doctorCount ++;
        // Add the doctor
        doctors[doctorCount] = Doctor(doctorCount, _name, msg.sender, _fees, _special);
        // Triggering the event
        emit DoctorAdded(doctorCount, _name, msg.sender, _fees, _special);
    }

    uint public patientCount = 0;
    mapping(uint => Patient) public patients;
    struct Patient{
        uint id;
        string name;
        address payable pat_acc;
        string special;
    }
    event PatientAdded(
        uint id,
        string name,
        address payable pat_acc,
        string special
    );
    function addPatient(string memory _name, string memory _special) public {
        // Require a valid name
        require(bytes(_name).length > 0);

        // Increment patient count
        patientCount ++;
        // Add the patient
        patients[patientCount] = Patient(patientCount, _name, msg.sender, _special);
        // Triggering the event
        emit PatientAdded(patientCount, _name, msg.sender, _special);
    }
}