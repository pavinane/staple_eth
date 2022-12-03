import React,{useState} from 'react';
import './App.css';
import BlockNav from './Components/Block1'
import Block2 from './Components/Block2/Block2';
import Platform from './Components/Block3/Platform';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import Web3 from "web3";

function LandingPage(props){
  return(
    <div className="landingPage ">
       <BlockNav
        ConnectWallet={props.ConnectWallet}
        appState={props.appState}
        setAppState={props.setAppState}
      />
      <Block2/>
      <Platform/>
      <Footer />
    </div>
  );
}

function App() {
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    account: "",
    isMetamask: true,
  });

  const ConnectWallet = () => {
    console.log("Connect Wallet", window.ethereum);
    if (window.ethereum) {
      appState.isWeb3 = true;
      const ethereum = window.ethereum;
      let web3 = new Web3(ethereum);
      ethereum.enable().then((accounts) => {
        let account = accounts[0];
        web3.eth.defaultAccount = account;
        web3.eth.transactionConfirmationBlocks = 10;
        console.log("Dets", account, appState, ethereum.chainId);
        setAppState((prevState) => {
          return {
            ...prevState,
            isLoggedIn: true,
            // account: web3.utils.toChecksumAddress(accounts[0]),
            account: accounts[0],
            web3: web3,
          };
        });
        switchNetworkMumbai(web3, ethereum, accounts[0]);
      });
    } else {
      setAppState((prevState) => {
        return { ...prevState, isMetamask: false };
      });
    }
  };

  const switchNetworkMumbai = async (web3, ethereum, account) => {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x61",
                chainName: "Polygon Mumbai Testnet",
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
              },
            ],
          });
        } catch (addError) {
          console.error("Error while adding new chain to MetaMask");
        }
      }
      // handle other "switch" errors
    }
  };

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage
           ConnectWallet={ConnectWallet}
           appState={appState}
           setAppState={setAppState}
          />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
