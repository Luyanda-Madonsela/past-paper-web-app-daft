"use client"

import Link from 'next/link'
import Image from 'next/Image';
import styles from './page.module.css'
import physics from '/public/images/physics.gif'
import chemical from '/public/images/chemical.png'
import pencil_and_ruler from '/public/images/pencil-and-ruler.png'
import sqroot from '/public/images/square-root-of-x-mathematical-signs.png'
import exam from '/public/images/exam.gif'
import math from '/public/images/maths.gif'
import writing from '/public/images/writing_green.png'
import download from '/public/images/download-pdf.png'
import aim from '/public/images/aim.png'
import tutor from '/public/images/support.png'
import upload from '/public/images/upload-file.png'
import folder from '/public/images/open-folder-with-document.png'
import settings from '/public/images/gear.png'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


export default function Home() {

    return (
    <div className={styles.main}>
        
        <div className={styles.mainSection1}>

            <div className={styles.mainSection1a}>
                <Image className={styles.image1} src={chemical} alt="Icon" width={74} />
            </div>

            <div className={styles.mainSection1b}>
                <Image className={styles.image2} src={math} alt="Icon" width={74} />
                <Image className={styles.image3} src={exam} alt="Icon" width={124} />
            </div>

        </div>

        {/* ------------------------------------------------------------------------------------ */}

        <div className={styles.mainSection2}>

            <div className={styles.mainSection2a}>

                <div className={styles.mainSection2a_1}>

                        <div className={styles.mainSection2a_1a}>
                            <p>Welcome<span className={styles.name}> Luyanda Madonsela!</span></p>
                        </div>

                        <div className={styles.mainSection2a_1b}>

                        <Stack direction="row" spacing={2}>
                            <Avatar alt="open folder with document" src="/images/profile_pic.png" sx={{ width: 104, height: 104 }} />
                        </Stack>

                        </div>

                </div>

                <div className={styles.mainSection2a_2}>
                    <p>How can we help?</p>
                </div>

            </div>

            <div className={styles.mainSection2b}>

                    <div className={styles.grid_container}>
                            
                        <Link href="/saved_questions">
                            <div className={styles.grid_item1}>
                                <div>
                                    <div>My Saved</div>
                                    <div>Questions</div>
                                </div>
                                <Image src={folder} alt="Icon" width={74} />
                            </div>
                        </Link>

                        <Link href="/find_specific_questions">
                            <div className={styles.grid_item2}>
                                <div>
                                    <div>Find Specific</div>
                                    <div>Questions</div>
                                </div>
                                    <Image src={aim} alt="Icon" width={74} />
                                </div>
                        </Link>

                        <Link href="/download_papers">
                            <div className={styles.grid_item3}>
                                <div>
                                    <div>Download</div>
                                    <div>Papers</div>
                                </div>
                                    <Image src={download} alt="Icon" width={74} />
                                </div>
                        </Link>

                        <Link href="/get_a_tutor">
                            <div className={styles.grid_item4}>
                                <div>
                                    <div>Book Online</div>
                                    <div>Tutor</div>
                                </div>
                                    <Image src={tutor} alt="Icon" width={74} />
                                </div>
                        </Link>

                        <Link href="/profile">
                            <div className={styles.grid_item5}>
                                <div>
                                    <div>Edit Profile</div>
                                </div>
                                    <Image src={settings} alt="Icon" width={44} />
                                </div>
                        </Link>

                        <Link href="/send_us_papers">
                            <div className={styles.grid_item6}>
                                <div>
                                    <div>Upload Papers</div>
                                </div>
                                    <Image src={upload} alt="Icon" width={44} />
                                </div>
                        </Link>

                    </div>

            </div>
            
        </div>

        {/* ------------------------------------------------------------------------------------- */}

        <div className={styles.mainSection3}>

            <div className={styles.mainSection3a}>
                <Image className={styles.image4} src={physics} alt="Icon" width={114} />
            </div>

            <div className={styles.mainSection3b}>
                <Image className={styles.image5} src={sqroot} alt="Icon" width={54} />
                <Image className={styles.image6} src={pencil_and_ruler} alt="Icon" width={44} />
                <Image className={styles.image7} src={writing} alt="Icon" width={64} />
            </div>
            
        </div>
        
    </div>
)
}
