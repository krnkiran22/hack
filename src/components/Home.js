import React, { useState } from 'react';
import { ethers } from 'ethers';

const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Use the correct provider syntax for ethers 5.7.2
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request accounts access
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("Please install MetaMask or a compatible wallet!");
    }
  };

  return (
    <div>
      <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
        <h2 style={{ display: 'inline-block', margin: 0 }}>Doctor Connect</h2>
        <button 
          onClick={connectWallet}
          style={{ float: 'right', padding: '10px', cursor: 'pointer' }}
        >
          {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...` : "Connect Wallet"}
        </button>
      </nav>
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Doctor Connect</h1>
        <p>Connect your wallet to start booking appointments and consultations.</p>
      </div>
    </div>
  );
};

export default Home;
