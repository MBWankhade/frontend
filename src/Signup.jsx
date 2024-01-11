import React from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const backendURL = 'https://backend-daily.onrender.com';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    fetch(`${backendURL}/admin/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden', backgroundColor: '#F0F4F8' }}>
      <div style={{ width: '80%', display: 'flex', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.1)' }}>
        {/* Left Section */}
        <div style={{ flex: '1', background: 'linear-gradient(135deg, #64B5F6, #4CAF50)', padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', borderRadius: '16px 0 0 16px' }}>
          <div style={{ color: '#FFF', fontFamily: 'Montserrat', fontSize: '24px', fontWeight: 600, textAlign: 'center', marginBottom: '20px' }}>
            Getting Started with VR Creation
          </div>
          <img src="../Abstraction.png" alt="Abstraction" style={{ width: '100%', marginTop: '20px', transform: 'rotate(-9.253deg)', borderRadius: '8px' }} />
        </div>

        {/* Right Section */}
        <div style={{ flex: '1', background: '#FFFFFF', padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'hidden' }}>
          <div style={{ color: '#333', fontFamily: 'Montserrat', fontSize: '32px', fontWeight: 800, marginBottom: '30px', textAlign: 'center' }}>
            Create Your Account
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '30px' }}>
            <div style={{ width: '48%' }}>
              <GoogleLoginButton onClick={() => {}} />
            </div>
            <div style={{ width: '48%' }}>
              <FacebookLoginButton onClick={() => {}} />
            </div>
          </div>
          <div style={{ color: '#666', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: 500, marginBottom: '20px', textAlign: 'center' }}>
            - OR -
          </div>
          <div style={{ width: '80%', marginBottom: '30px' }}>
            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth onChange={e => setName(e.target.value)} />
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth type="email" onChange={e => setEmail(e.target.value)} style={{ marginTop: '20px' }} />
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth type="password" onChange={e => setPassword(e.target.value)} style={{ marginTop: '20px' }} />
          </div>
          <Button
            onClick={handleSignup}
            variant="contained"
            style={{
              width: '80%',
              height: '57px',
              borderRadius: '5px',
              background: '#4CAF50',
              color: '#FFF',
              fontFamily: 'Montserrat',
              fontSize: '18px',
              fontWeight: 800,
              marginTop: '20px',
            }}
          >
            Create Account
          </Button>
          <p style={{ color: '#333', marginTop: '20px', fontSize: '16px', textAlign: 'center' }}>
            Already have an account? <a href="/login" style={{ color: '#4CAF50', textDecoration: 'underline' }}>Log In</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
