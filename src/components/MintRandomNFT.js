import React, { useState } from 'react';
import { ethers } from 'ethers';
import MyNFTAbi from './MyNFTAbi.json'; // Replace with your actual contract's ABI

const MintRandomNFT = () => {
  const [account, setAccount] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [error, setError] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  const contractAddress = '0x5df20f6f8a247552ec2296c5d56c3c2a7cfa6c11'; // Replace with your contract address

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } else {
      setError('Please install MetaMask or another wallet provider.');
    }
  };

  const mintNFT = async () => {
    if (!account) {
      setError('Please connect your wallet first.');
      return;
    }

    setIsMinting(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, MyNFTAbi, signer);

      const tx = await nftContract.mintNFT(account);
      console.log("Transaction sent:", tx);

      const receipt = await tx.wait();
      console.log("Transaction mined:", receipt);

      const event = receipt.events.find((e) => e.event === 'NFTMinted');
      if (event) {
        const mintedTokenId = event.args.tokenId.toString();
        setTokenId(mintedTokenId);
      } else {
        setError('Minting failed, event not found.');
      }
    } catch (err) {
      setError('Minting failed. Please try again.');
      console.error('Minting error:', err);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <button onClick={connectWallet} style={styles.connectButton}>
          {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect Wallet'}
        </button>
      </nav>
      <div style={styles.content}>
        <h1 style={styles.heading}>Mint Your NFT</h1>
        {isMinting ? (
          <p style={styles.status}>Minting in progress...</p>
        ) : (
          <button onClick={mintNFT} style={styles.mintButton}>Mint NFT</button>
        )}
        {tokenId && <p style={styles.success}>Your NFT has been minted! Token ID: {tokenId}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f6f8',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  nav: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px 20px',
    backgroundColor: '#333',
  },
  connectButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    maxWidth: '400px',
    width: '100%',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  mintButton: {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  mintButtonHover: {
    backgroundColor: '#0056b3',
  },
  status: {
    fontSize: '18px',
    color: '#555',
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

export default MintRandomNFT;
