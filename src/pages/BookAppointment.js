import React, { useState } from 'react';
import { ethers } from 'ethers';
import AppointmentBookingAbi from './AppointmentBookingAbi.json'; // Replace with your ABI

const BookAppointment = () => {
  const [account, setAccount] = useState(null);
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const contractAddress = '0xa42b1378D1A84b153eB3e3838aE62870A67a40EA';

  // Connect Wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      setError('Please install MetaMask or another wallet provider.');
    }
  };

  // Book Appointment function
  const bookAppointment = async () => {
    if (!dateTime) {
      setError('Please select a date and time.');
      return;
    }

    try {
      setIsBooking(true);
      setError('');

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const bookingContract = new ethers.Contract(contractAddress, AppointmentBookingAbi, signer);

      // Call the bookAppointment function with 0.00001 ETH
      const tx = await bookingContract.bookAppointment(Date.parse(dateTime) / 1000, {
        value: ethers.utils.parseEther('0.00001'),
      });
      await tx.wait();

      setBookingSuccess(true);
    } catch (err) {
      setError('Booking failed. Please try again.');
      console.error(err);
    } finally {
      setIsBooking(false);
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
        <h1>Book Appointment</h1>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </label>
        {isBooking ? (
          <p>Booking in progress...</p>
        ) : (
          <button onClick={bookAppointment}>Book Appointment</button>
        )}
        {bookingSuccess && <p>Appointment booked successfully!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default BookAppointment;
