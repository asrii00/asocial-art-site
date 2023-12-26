
import { useState } from "react";

export default function LoginPage() {
 const [uname, setUname] = useState('');
    const [pw, setPw] = useState('');

    function login(){


    };


    return (

        <div>
            <b>Login</b><br></br>
            Username <br/>
            <input value={uname} onChange={e => setUname(e.target.value)} /><br/>
            Password <br/>
            <input value={pw} onChange={e => setPw(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>

    );


}