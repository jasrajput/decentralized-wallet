import { useEffect, useState } from "react";
import Header from "./Header";
import { ethers } from "ethers";
import CryptoJS from 'crypto-js';
import { useNavigate, useLocation } from "react-router-dom";

export default function SeedPhrase() {
    const [phrase, setPhrase] = useState([]);

    const [password, setPassword] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const [address, setAddress] = useState('');
    const [publicKey, setPublicKey] = useState('');
  
    const navigate = useNavigate();
    // const { state } = useLocation();
    // const password = state.password;

    const [encryptedKey, setEncryptedKey] = useState('');
    const [decryptedKey, setDecryptedKey] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const generatePrivateKey = () => {
        const wallet = ethers.Wallet.createRandom();
        setPrivateKey(wallet.privateKey);
    };

    const encryptPrivateKey = () => {
        const encrypted = CryptoJS.AES.encrypt(privateKey, password).toString();
        setEncryptedKey(encrypted);
        localStorage.setItem('encryptedPrivateKey', encrypted);
    };

    const decryptPrivateKey = () => {
        const encrypted = localStorage.getItem('encryptedPrivateKey');
        if (!encrypted) {
          alert('No encrypted key found');
          return;
        }
      
        try {
          const bytes = CryptoJS.AES.decrypt(encrypted, password);
          const decrypted = bytes.toString(CryptoJS.enc.Utf8);
          setDecryptedKey(decrypted);
        } catch (error) {
          console.error('Error decrypting:', error.message);
          alert('Failed to decrypt private key');
        }
      };

      const getDetails = () => {
        const wallet = new ethers.Wallet(decryptedKey);
        console.log(wallet);
        const address = wallet.address;
        const publicKey = wallet.publicKey;

        setAddress(address);
        setPublicKey(publicKey);
      }
      


    useEffect(() => {
        const mnemonic = ethers.Wallet.createRandom();
        // const privateKey = mnemonic.privateKey;
        // const publicKey = mnemonic.publicKey;
        const phrase = mnemonic.mnemonic.phrase;
        setPhrase(phrase);
    }, [])
    
    return (
        <>
            <Header />
            <div style={{ marginLeft: 20 }}>
                <h2>Secret Recovery Phrase</h2>
                <p>Your secret recovery phrase makes it easy to back up and restore your account.</p>
                <p style={{ marginTop: 10 }}>
                    WARNING: Never disclose your Secret Recovery Phrase. Anyone with this phrase can take your ether forever.
                </p>
                <textarea readOnly rows={4} columns={15} style={{ marginTop: 10, padding: 20, width: '30%', textAlign: 'center' }} value={phrase}></textarea>
                
            </div>
            {/* <button style={{ marginLeft: 20 }} onClick={() => navigate('/seed-phrase-intro', {
                state: [phrase.split(' ')]
            })}>Next</button> */}

<div>
        <label>
          Password:
          <input type="password" style={{width: '100%', margin: 10, padding: 10}} value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <div>
        <button onClick={generatePrivateKey}>Generate Private Key</button>
      </div>
      <div>
        <label>
          Private Key:
          <input type="text" style={{width: '100%', margin: 10, padding: 10}} value={privateKey} readOnly />
        </label>
      </div>
      <div>
        <button onClick={encryptPrivateKey}>Encrypt Private Key</button>
      </div>
      <div>
        <p>Encrypted Key: {encryptedKey}</p>
      </div>
      <div>
        <button onClick={decryptPrivateKey}>Decrypt Private Key</button>
      </div>
      <div>
        <p>Decrypted Key: {decryptedKey}</p>
      </div>
      <div>
        <button onClick={getDetails}>Get Details</button>
        <p>Address: {address}</p>
        <p>Public Key: {publicKey}</p>

      </div>

      
            
        </>
    )
}