import React from "react";
import { Paper, Box, Typography, TextField, Button } from '@mui/material';
import cats from '../assets/cats.svg';

function CreateCourse() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image, setImage] = React.useState('');
    const [published, setPublished] = React.useState('');

    return <div>
        <Box
        sx={{
            display: 'flex',
            minHeight: '100vh',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '20px',
            justifyContent: 'center',
        }}>
            <Paper elevation={3} >
                <Typography variant="body2" align="center">
                <h1>Create Course Here</h1>
                </Typography>

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
                        <TextField id="filled-basic" label="Course Title" variant="filled" onChange={e => setTitle(e.target.value) }/>
                        <TextField id="filled-basic" label="Description" variant="filled" onChange={e => setDescription(e.target.value)} />
                        <TextField id="filled-basic" label="Price" variant="filled" onChange={e => setPrice(e.target.value) }/>
                        <TextField id="filled-basic" label="Image Link" variant="filled" onChange={e => setImage(e.target.value)} />
                        <TextField id="filled-basic" label="Published" variant="filled" onChange={e => setPublished(e.target.value) }/>
                        <Button variant="contained" href="/login">Create Course</Button>
                    </div>
                
                    <img src={cats} alt="Login Image" width="100%" max-height= "100%" object-fit= "cover" align= "center" />
                </Box>
            </Paper>
     </Box>
    </div>
}
export default CreateCourse;