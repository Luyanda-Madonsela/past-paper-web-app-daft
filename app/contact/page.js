"use client"

import styles from "./page.module.css";
import * as React from 'react';
import Image from 'next/image';
import message from '/public/images/message.gif'

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
                    width={150} 
                    height={40}
                    className={styles.messageImg}
                />

        </div>

        <div className={styles.mainSection2}>

            <div className={styles.mainSection2a}>
                <p className={styles.header}>Leave a message</p>
            </div>

        </div>
        <div className={styles.mainSection3}></div>
    </div>
)
}
