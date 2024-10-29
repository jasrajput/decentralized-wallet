import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="App welcome-design">
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Welcome to Metamask</h4>

            <p>Connecting your ethereum and the Decentralized <br/> Web</p>
            <p>We're happy to see you.</p>
            <button onClick={() => navigate('/select-action')}>Get Started</button>
        </div>
    )
}