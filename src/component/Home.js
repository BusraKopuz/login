import React from "react";
import {Link} from 'react-router-dom';
import backgroundImage from "./images/img.jpg";

function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const buttonStyle = {
        margin: '10px'
    };
    return(
        <div style={containerStyle}>
            <div>
                <Link to="/login">
                    <button className="button is-danger"  style={buttonStyle}>Giriş Yap</button>
                </Link>
                <Link to="/signup">
                    <button className="button is-danger"  style={buttonStyle}>Kayıt Ol</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;