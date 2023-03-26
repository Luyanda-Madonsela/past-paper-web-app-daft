"use client"
import styles from "./page.module.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const signInButt = {
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

  const link = {
    color: '#6EC5EB',
  }; 

  const link2 = {
    color: '#999999',
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
                <p className={styles.header}>Welcome Back</p>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
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
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" style={link2}/>}
                      label="Remember me"
                      style={link2}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={signInButt}
                    >
                      Sign In
                    </Button>

                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2" style={link}>
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/signup" variant="body2" style={link}>
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
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
