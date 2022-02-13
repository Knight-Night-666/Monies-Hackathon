import React, { Component } from 'react';
import Web3 from 'web3';
import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Hospital from '../abis/Hospital.json';
import Appointment from './Appointment/Appointment'
import Main from './Doctor/Main';
import Landing from './Landing/Landing';
import Patient from './Patient/Patient';
import Navbar from './Navbar/Navbar';
import Congratulations from './Congratulations/Congratulations'
class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('Non Ethereum Browser Detected, Try Connecting Metamask')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //Load Account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Hospital.networks[networkId]
    if(networkData){
      const hospital = new web3.eth.Contract(Hospital.abi, networkData.address)
      this.setState({hospital})
      const DoctorCount = await hospital.methods.doctorCount().call()
      const PatientCount = await hospital.methods.patientCount().call()
      for(var i = 1; i <= DoctorCount; i++) {
        const doctor = await hospital.methods.doctors(i).call()
        this.setState({
          doctors: [...this.state.doctors, doctor]
        })
      }
      for(var i = 1; i <= PatientCount; i++) {
        const patient = await hospital.methods.patients(i).call()
        this.setState({
          patients: [...this.state.patients, patient]
        })
      }
      this.setState({loading: false})
    }
    else {
      window.alert('Contract not deployed to network')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      DoctorCount: 0,
      PatientCount: 0,
      doctors: [],
      patients: [],
      loading: true
    }

    this.addDoctor = this.addDoctor.bind(this)
    this.addAppointment = this.addAppointment.bind(this)
  }

  addAppointment(id,name,age,healthissue,gender,modeofappointment,specialneedy,price) {
    this.setState({loading: true})
    // window.alert(this.state.account)
    this.state.hospital.methods.addAppointment(id,name,age,healthissue,gender,modeofappointment,specialneedy).send({from: this.state.account, value: price})
    // this.state.hospital.methods.addAppointment(2,"name","age","healthissue","gender","modeofappointment","specialneedy").send({from: this.state.account, value: price})
    .once('receipt',(receipt)=> {
      this.setState({PatientCount: this.state.PatientCount+1})
      this.setState({ loading: false })

    })
  }


  addDoctor(name, price, special) {
    this.setState({loading: true})
    this.state.hospital.methods.addDoctor(name,price, special).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({DoctorCount: this.state.DoctorCount+1})
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div >
        
        
        <Router>
        <Navbar/>
        <div >
        
        <Routes>
          <Route exact path='/Doctor/Main' element={
          <Main 
          doctors = {this.state.doctors} 
          addDoctor= {this.addDoctor}  
          account = {this.state.account}
          doctorCount = {this.state.DoctorCount}
          patients = {this.state.patients}
          />
          }/>
          <Route exact path='/Patient/Patient' element={
          <Patient
          doctors = {this.state.doctors} 
          addAppointment = {this.addAppointment}
          account = {this.state.account}
          doctorCount = {this.state.DoctorCount}
           
          />
          }/>

          <Route exact path='/Appointment/Appointment' element={
          <Appointment
          
          doctors = {this.state.doctors} 
          addAppointment = {this.addAppointment}
          account = {this.state.account}
          doctorCount = {this.state.DoctorCount}
          
           
          />
          }/>

          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/Congratulations/Congratulations' element={<Congratulations/>}/>
        </Routes>
        </div>
        </Router>
        
      </div>
    );
  }
}

export default App;