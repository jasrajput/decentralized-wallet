import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef } from "react";

export default function CreatePassword() {
    const navigate = useNavigate();
    const password = useRef();
    return (
        <>
            <Header />
            <div style={{margin: 20}}>
                <h1>Create Password</h1>

                <div>
                    <label forName='password'>Password</label>
                    <br/>
                    <input ref={password} type="password" style={{padding: 5, width: '25%', marginTop: 5}}  />
                </div>

                <div style={{marginTop: 10}}>
                    <label forName='c_password'>Confirm Password</label>
                    <br/>
                    <input type="password" style={{padding: 5, width: '25%', marginTop: 5}}  />
                </div>
                
                <button onClick={() => navigate('/seed-phrase', {
                    state: {
                        'password': password?.current?.value
                    }
                })} style={{width: '10%'}}>Create a Wallet</button>
            </div>
        </>
    )
}