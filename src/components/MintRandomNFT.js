import React, { useState } from 'react';
import { ethers } from 'ethers';
import MyNFTAbi from './MyNFTAbi.json'; // Replace with your actual contract's ABI

const MintRandomNFT = () => {
  const [account, setAccount] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [error, setError] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  const contractAddress = '0x5df20f6f8a247552ec2296c5d56c3c2a7cfa6c11'; // Replace with your contract address

  // Connect Wallet function
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

  

  // Mint NFT function
  const mintNFT = async () => {
    if (!account) {
      setError('Please connect your wallet first.');
      return;
    }

    setIsMinting(true); // Start the minting process
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, MyNFTAbi, signer);

      // Call the mintNFT function
      const tx = await nftContract.mintNFT(account);
      console.log("Transaction sent:", tx);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction mined:", receipt);

      // Listen to the 'NFTMinted' event in the receipt
      const event = receipt.events.find((e) => e.event === 'NFTMinted');
      if (event) {
        const mintedTokenId = event.args.tokenId.toString();
        setTokenId(mintedTokenId); // Set the minted tokenId in the state
      } else {
        setError('Minting failed, event not found.');
      }
    } catch (err) {
      setError('Minting failed. Please try again.');
      console.error('Minting error:', err);
    } finally {
      setIsMinting(false); // End the minting process
    }
  };

  return (
    <div>
      <nav>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account.substring(0, 6)}...` : 'Connect Wallet'}
        </button>
      </nav>
      <div>
        <h1>Mint Your NFT</h1>
        {isMinting ? (
          <p>Minting in progress...</p>
        ) : (
          <button onClick={mintNFT}>Mint NFT</button>
        )}
        {tokenId && <p>Your NFT has been minted! Token ID: {tokenId}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default MintRandomNFT;
