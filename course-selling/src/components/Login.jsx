import React from "react";
import { Paper, Box, Typography, TextField, Button } from '@mui/material';
import cats from '../assets/cats.svg';
import axios from 'axios';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return <div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 400,
            height: 500,
            },
            justifyContent: 'center'
        }}>
            <Paper elevation={3} >
                <Typography variant="body2" align="center">
                <h1>Login to admin dashboard</h1>
                New here? <a href="/register">Register</a>
                </Typography>
                <br/>

                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                align="center"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px' }}>
                        <TextField id="filled-basic" label="Email" variant="filled" onChange={e => setEmail(e.target.value) }/>
                        <TextField id="filled-basic" label="Password" variant="filled" onChange={e => setPassword(e.target.value)} />
                        <Button variant="contained" 
                            onClick={() => {
                                axios.post('http://localhost:3000/admin/login', {
                                        username: email,
                                        password: password,
                                    }, {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                                        },
                                    })
                                    .then( res => {
                                        const data = res.data;
                                        localStorage.setItem('token', data.token);
                                    })
                                    .catch(err => {
                                        console.error('Error during signup: ', err);
                                    });
                            }}>Login</Button>
                    </div>
                
                    <img src={cats} alt="Login Image" width="100%" max-height= "100%" object-fit= "cover" align= "center" />
                </Box>
            </Paper>
     </Box>
    </div>
}

export default Login;