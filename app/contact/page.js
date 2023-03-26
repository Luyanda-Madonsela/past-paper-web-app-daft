"use client"
import styles from "./page.module.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/Image';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import message from '/public/images/message.gif'

    const sendButt = {
        backgroundColor: '#6EC5EB',
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
        <div className={styles.mainSection1}>

                <Image src={message}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={100} 
                    height={40}
                />

        </div>

        <div className={styles.mainSection2}>

            <div className={styles.mainSection2a}>
                <p className={styles.header}>Leave a message</p>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
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
                        fullWidth
                        name="phone"
                        label="Phone (optional)"
                        type="phone"
                        id="phone"
                        autoComplete="phone"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="subject"
                        label="Message Subject"
                        type="subject"
                        id="subject"
                        autoComplete="subject"
                    />

                    <TextField
                    required
                    id="outlined-textarea"
                    label="Message"
                    placeholder="Type your message here..."
                    multiline
                    minRows={6}
                    fullWidth
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={sendButt}
                    >
                    Send Message
                    </Button>

                </Box>

                </div>

        </div>
        <div className={styles.mainSection3}></div>
    </div>
)
}
