import React, { useState } from "react";

function Signup( {onSubmit} ) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [accept, setAccept] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !userName || !email || !password || !confirmPassword) {
            setError("Lütfen tüm alanları doldurun.");
            return;
        }

        if (!accept) {
            setError("Koşulları kabul etmelisiniz.");
            return;
        }
        
        onSubmit({ firstName, lastName, userName, email, password, confirmPassword });

        setFirstName("");
        setLastName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
        setAccept(false);
    }

    
    return (
        <div className="container">
            <h2 className="subtitle is-2">Kayıt</h2>
            <form className="box" onSubmit={handleSubmit}>
                {error && <div className="notification is-danger">{error}</div>}
                <div className="field">
                    <label className="label">FIRST NAME</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="firstname"
                            value={firstName}
                            placeholder="Enter your first name"
                            onChange={(e)=> setFirstName(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className="field">
                    <label className="label">LAST NAME</label>
                    <div className="control">
                        <input 
                            className="input"
                            type="lastname"
                            value={lastName}
                            placeholder="Enter your last name"
                            onChange={(e)=> setLastName(e.target.value)}
                            
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">EMAİL
                    <span style={{color: 'red'}} className="required">*</span>
                    </label>
                    <div className="control">
                        <input 
                            className="input"
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e)=> setEmail(e.target.value)}
                      
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">USER NAME
                    <span style={{color: 'red'}} className="required">*</span>
                    </label>
                    <div className="control">
                        <input 
                            className="input"
                            type="userName"
                            value={userName}
                            placeholder="Enter your user name"
                            onChange={(e)=> setUserName(e.target.value)}
                            
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">PASSWORD
                    <span style={{color: 'red'}} className="required">*</span>
                    </label>
                    <div className="control">
                        <input 
                            className="input"
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e)=> setPassword(e.target.value)}
                        
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">CONFIRM PASSWORD
                    <span style={{color: 'red'}} className="required">*</span>
                    </label>
                    <div className="control">
                        <input
                            className="input" 
                            type="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm your password"
                            onChange={(e)=> setConfirmPassword(e.target.value)}
                        
                        />
                    </div>
                </div>
                <div>
                    <label className="checkbox">
                        <input 
                        type="checkbox"
                        checked={accept}
                        onChange={(e) => setAccept(e.target.checked)} /> 
                        I Accept <a href="#">Terms and Conditions</a>
                    </label>
                </div>
                <button className="button is-primary"  type="submit">SIGN UP</button>
                
            </form>
        </div>
    )
}

export default Signup;