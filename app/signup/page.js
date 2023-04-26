"use client"

import styles from "./page.module.css";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

    const createButt = {
        backgroundColor: '#6EC5EB',
        color: 'white',
    };

    const googleButt = {
        backgroundColor: '#D0463B',
        color: 'white',
    };

    const facebookButt = {
        backgroundColor: '#32519B',
        color: 'white',
    };

    export default function Home()
    {
        const handleSubmit = (event) => {
            event.preventDefault();}
            const data = new FormData(Event.currentTarget);
            console.log({
            email: data.get('email'),
            password: data.get('password'),
            });

return (
    <div className={styles.main}>
        <div className={styles.mainSection1}></div>

        <div className={styles.mainSection2}>

            <div className={styles.mainSection2a}>
                <p className={styles.header}>Create your account</p>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="lastName"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastName"
                    />
                    
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password2"
                        label="Repeat Password"
                        type="password2"
                        id="password2"
                        autoComplete="current-password"
                    />
                    

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={createButt}
                    >
                    Create account
                    </Button>

                </Box>

                </div>
                    <div className={styles.mainSection2b}>
                        <p>OR</p>
                    </div>

                    <div className={styles.mainSection2c}>
                        <Button variant="" startIcon={<GoogleIcon />} 
                        fullWidth
                        style={googleButt}>
                        Sign in with Google
                        </Button>

                        <Button variant="" startIcon={<FacebookIcon />} 
                        fullWidth
                        style={facebookButt}>
                        Sign in with Facebook
                        </Button>
                    </div>
    
        </div>
        <div className={styles.mainSection3}></div>
    </div>
)
}
