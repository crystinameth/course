
import React from "react";
import { Card, Typography , Button } from '@mui/material';


function Landing() {
    return (<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Card variant="outlined" style={{ marginTop: '20px', width: '500px', height: '250px', background: '#f0f0f0'}}>
        <Typography variant="body2" align="center">
        <h1>Welcome to course selling website!</h1>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom align="center">
        <p>Discover and enroll in a variety of courses tailored to your interests.
        Get started by logging in or registering for an account !!!</p>
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" href="/register">
        Register
        </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" href="/login">
        Login
        </Button>
        </div>
        </Card>
     </div>)
}

export default Landing;