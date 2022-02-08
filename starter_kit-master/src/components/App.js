import React, { Component,useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Web3 from 'web3'
import logo from '../logo.png';


import Marketplace from '../abis/Marketplace.json'

import Navbar from './Navbar'
import Landing from './Landing/Landing'
import Doctor from './Doctor/Doctor'
import Patient from './Patient/Patient';

class App extends Component {
  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      console.log(marketplace)
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true
    }
  }
  
  render() {
    return (
      <Router>
      <div>
        {/* <Navbar account={this.state.account} /> */}
        
        <Routes>
          <Route exact path='/Doctor/Doctor' element={<Doctor/>}/>
          <Route exact path='/Patient/Patient' element={<Patient/>}/>
          <Route exact path='/' element={<Landing/>}/>
        </Routes>
      </div>
      </Router>
    );
  }
}

export default App;
