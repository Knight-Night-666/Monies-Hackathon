import React, { Component } from 'react';
import Web3 from 'web3';
import logo from '../logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Hospital from '../abis/Hospital.json';
import Navbar from './Navbar';
import Main from './Doctor/Main';
import Landing from './Landing/Landing';
import Patient from './Patient/Patient';

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
      for(var i = 1; i <= DoctorCount; i++) {
        const doctor = await hospital.methods.doctors(i).call()
        this.setState({
          doctors: [...this.state.doctors, doctor]
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
      doctors: [],
      loading: true
    }

    this.addDoctor = this.addDoctor.bind(this)
  }

  addDoctor(name, price, special) {
    this.setState({loading: true})
    this.state.hospital.methods.addDoctor(name,price, special).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
      window.alert()
    })
  }

  render() {
    return (
      <div>
        {/* <Navbar account={this.state.account} /> */}
        <Router>
        <div>
        
        <Routes>
          <Route exact path='/Doctor/Main' element={
          <Main 
          doctors = {this.state.doctors} 
          addDoctor= {this.addDoctor}  
          />
          }/>
          <Route exact path='/Patient/Patient' element={<Patient/>}/>
          <Route exact path='/' element={<Landing/>}/>
        </Routes>
        </div>
        </Router>
        {/* <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading
              ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
              : <Main 
                  doctors = {this.state.doctors} 
                  addDoctor= {this.addDoctor}  
                />
              }
            </main>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;