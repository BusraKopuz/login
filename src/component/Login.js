import React, {useState} from "react";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <h2 className="subtitle is-2">Giriş</h2>
            <form className="box" onSubmit={handleSubmit}>
                <div className="control">
                    <label className="label">User Name</label>
                    <div className="control">
                        <input
                        className="input" 
                        type="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                        className="input" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button className="button is-primary" type="submit">LOGIN UP</button>
            </form>
        </div>
    )
}

export default Login;