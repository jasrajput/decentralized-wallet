import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect, act } from "react";

export default function SeedConfirm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [isActive, setActive] = useState([]);
    const seedPhrase =  [...location.state[0]];

    const activeStyles = {
        backgroundColor: '#0096FF',
        color: '#fff',
        border: '2px solid #0096FF',
        borderRadius: 5
    }

    const inactiveStyles = {
        backgroundColor: '#fff',
        color: '#0096FF',
        border: '2px solid #eee',
        borderRadius: 5
    }

    const confirmPhrase = (seed, index) => {
        setActive(prev => {
            const newActive = [...prev];
            newActive[index] = !newActive[index];
            return newActive;
        });

        setData(prevItems => {
            if (!prevItems.includes(seed)) {
                return [...prevItems, seed];
            }
            return prevItems.filter(item => item !== seed);
        });
    }

    const removePhrase = (itemToRemove) => {
        const indexToRemove = data.indexOf(itemToRemove);
        setData(prevItems => prevItems.filter(item => item !== itemToRemove));

        setActive(prev => {
            const newActive = [...prev];
            if (indexToRemove !== -1) {
                newActive[indexToRemove] = false;
            }
            return newActive;
        });
    }

    const validateSeed = () => {
        const actualPhrase = location.state[0];
        const inputPhrase = data;
        const length = inputPhrase.length;
        if(length < 12) {
            return alert('Missing phrases');
        }

        var Invalid = false;
        for(var i = 0; i < length; i++) {
            if(actualPhrase[i] !== inputPhrase[i]) {
                Invalid = true;
            } 
        }

        if(Invalid) {
            return alert('Invalid phrase');
        }

        navigate('/home');

    }

    return(
        <div style={{ width: '60%' }}>
            <Header />
            <div style={{ marginLeft: 14 }}>
                <h1>Confirm Your Secret Recovery Phrase</h1>
                <p>Please select each phrase in order to make sure it is correct.</p>
                <div style={{ border: '2px solid #eee', height: '140px', marginTop: 5, padding: 20, width: '55%', }}>
                    {
                        data.map((seed, index) => (
                            <button onClick={() => removePhrase(seed)} style={{ border: '2px solid #eee', backgroundColor: '#fff', color: '#0096FF', borderRadius: 5, margin: '10px 10px' }} key={index}>{seed}</button>
                        ))
                    }
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '60%', flexWrap: 'wrap', margin: '1px 10px' }}>
                {
                    seedPhrase.sort().map((seed, index) => (
                        <button onClick={() => confirmPhrase(seed, index)} style={isActive[index] ? activeStyles : inactiveStyles} key={index}>{seed}</button>
                    ))
                }
            </div>
            <button style={{ marginLeft: 20 }} onClick={validateSeed}>Confirm</button>
        </div>
    )
}
