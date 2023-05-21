"use client"

import styles from "./page.module.css";
import * as React from 'react';

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
            </div>

            <div className={styles.mainSection2b}>
                <p>OR</p>
            </div>

            <div className={styles.mainSection2c}>
    
            </div>
    
        </div>
        <div className={styles.mainSection3}></div>
    </div>
)
}
