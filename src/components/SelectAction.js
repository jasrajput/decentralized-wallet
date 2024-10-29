import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function SelectAction() {
    const navigate = useNavigate();
    return (
        <div className="App-header">
            <Header />
            <div>
                <h3 style={{textAlign: 'center', fontWeight: 500, marginTop: 50}}>New to Metamask ?</h3>

                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 34}}>
                    <div style={{border: '1px solid #eee', borderRadius: 14, textAlign: 'center', padding: '35px 25px'}}>
                        <h4>No, I already have a Secret Recovery Phrase</h4>
                        <p>Import your existing wallet using a Secret Recovery Phrase</p>
                        <button style={{width: '40%'}}>Import Wallet</button>
                    </div>

                    <div style={{border: '1px solid #eee', borderRadius: 14, textAlign: 'center', padding: '35px 25px'}}>
                        <h4>Yes, let's set up!</h4>
                        <p>This will create a new wallet and Secret Recovery Phrase</p>
                        <button onClick={() => navigate('/create-password')} style={{width: '40%'}}>Create a Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}