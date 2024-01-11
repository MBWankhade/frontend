import React from 'react'
import { FacebookLoginButton } from "react-social-login-buttons"
import { GoogleLoginButton } from "react-social-login-buttons"
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const backendURL = 'https://backend-daily.onrender.com';

const Login = () => { 
  const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <div style={{
      display: 'flex',
      width: '75vw',
      height: '50vh',
      padding: '194px 170px',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(26, 74, 96, 0.80)'
    }}>
      <div style={{
        display:'flex',
        alignItems:'center',
        width: '95%',
        height: '160%',
        flexShrink: 0,
        borderRadius: '31px',
        background: '#1F485B',
        boxShadow: '-4px 4px 26px 0px rgba(75, 100, 119, 0.69), 4px 4px 16px 0px rgba(255, 255, 255, 0.15), 4px 4px 26px 0px rgba(255, 255, 255, 0.37)'
      }}>
        <div style={{
          // background: '#1F485B',
          width: '35%',
          height: '100%',
          // borderRadius: '31px',
          boxShadow: '-4px 4px 26px 0px rgba(75, 100, 119, 0.69), 4px 4px 16px 0px rgba(255, 255, 255, 0.15), 4px 4px 26px 0px rgba(255, 255, 255, 0.37)',
        }}>
          <div>
            <img src="static/images/sam1.png" alt="" />
          </div>
          <div style={{
            width: '70%',
            height: '20%',
            flexShrink: 0,
            color: '#FFF',
            fontFamily: 'Poppins',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '35px',
            letterSpacing: '3.96px',
            marginLeft: '10%',
            marginTop:'5%',
          }}>
            Getting Started With VR Creation
          </div>
          <div style={{
            
          }}>
            <img src="static/images/Abstraction.png" alt="" style={{
              transform: 'rotate(-9.253deg)',
              flexShrink: 0,
              width:'105%',
              height:'90%',
              marginLeft:'10%'
            }}/>
          </div>
        </div>
        <div style={{
          width: '65%',
          height: '100%',
          flexShrink: 0,
          borderRadius: '31px',
          background: '#FFF',
        }}>
          <div style={{
            color: '#000', // Make sure to enclose color value in quotes
            fontFamily: 'Poppins', // Make sure to enclose font name in quotes
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: '35px', // Make sure to enclose value in quotes
            letterSpacing: '1.92px',
            marginTop:'10%',
            marginLeft:'16%',
          }}>
            Create Account
          </div>
          <div style={{
            display:'flex',
            alignItems:'space-between',
          }}>
            <div style={{
              marginLeft:'16%',
              marginTop:'2px',
              
            }}>
              <GoogleLoginButton  style={{
                width:'95%'
              }}/>
            </div>
            <div>
              <FacebookLoginButton  style={{
                width:'100%'
              }}/>
            </div>
          </div>
          <div style={{
            color: '#CDCACA',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 300,
            lineHeight: '35px', // Make sure to enclose value in quotes
            letterSpacing: '1.44px',
            marginLeft: '46%',
            marginTop:'3%',
          }}>
          - OR -
          </div>
          <div style={{
            marginLeft:'16%',
            marginTop:'5%',
            width:'100%'
          }}>
            <TextField  id="outlined-basic" onChange={e=>setName(e.target.value)} label="Full Name" variant="outlined" style={{
              width:'70%',
            }}/><br /><br />
            <TextField id="outlined-basic" onChange={e=>setEmail(e.target.value)} label="Email" variant="outlined" style={{
              width:'70%',
            }}/><br /><br />
            <TextField id="outlined-basic" onChange={e=>setPassword(e.target.value)} label="Password" variant="outlined" style={{
              width:'70%',
            }}/>
          </div>
          <button style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width: '513px',
            height: '57px',
            flexShrink: 0,
            borderRadius: '5px',
            background: '#1F485B',
            color: '#FFF',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: '35px', /* 218.75% */
            letterSpacing: '1.28px',
            marginLeft:'16%',
            marginTop:'5%',
        }}
        onClick={() => {
          fetch(`${backendURL}/admin/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              username: email, // Replace with the actual email value
              password: password
            },
            body: JSON.stringify({
               // Replace with the actual password value
            }), // Convert the data to JSON format
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json(); // Parse the response JSON
            })
            .then(data => {
              localStorage.setItem('token',data.token);
              navigate('/');
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle errors here
            });
        }}
        >
            Login
          </button>
          <button onClick={()=>{
            navigate('/signup')
          }}>Don't have an account?Signup</button>

        </div>

      </div>
    </div>
    
  )
}

export default Login