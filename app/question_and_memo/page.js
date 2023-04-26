"use client"

import Link from 'next/link'
import Image from 'next/image';
import styles from './page.module.css'
import question from '/public/images/sample_question.png'
import memo from '/public/images/sample_memo.png'
import next from '/public/images/next.png'
import youtube_red from '/public/images/youtube_red.png'
import doc from '/public/images/google_docs.png'
import save from '/public/images/save.png'
import download from '/public/images/download-pdf.png'
import share from '/public/images/share.png'
import tutor from '/public/images/tutor.png'
import conversation from '/public/images/conversation.png'
import star_filled from '/public/images/star_filled.png'
import star_unfilled from '/public/images/star_unfilled.png'
import door from '/public/images/door.png'
import previous from '/public/images/previous.png'
import * as React from 'react';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


export default function Home() {

    return (
    <div className={styles.main}>

        <div className={styles.mainSection1}>
        <Link href="/">
                <div className={styles.mainSection1_a}>
                    <Image src={previous} width={24} className={styles.previous} />
                    <p>Previous Question</p>
                </div>
        </Link> 
                <div className={styles.mainSection1_b}>
                    <p>Functions & Graphs</p>
                </div>
        <Link href="/">
                <div className={styles.mainSection1_c}>
                    <p>Next Question</p>
                    <Image src={next} width={24} className={styles.next} />
                </div> 
        </Link> 
        </div>


        <div className={styles.mainSection2}>

                <div className={styles.mainSection2_a}>
                    <p>Completed</p>
                </div>

                <div className={styles.mainSection2_b}>
                        <p>DBE - November 2018 - Paper 1 - Question 5</p>
                </div>

                <div className={styles.mainSection2_c}>
                    <select className={styles.infoSheet}>
                        <option value="" selected disabled>Information Sheets</option>
                        <option value="">DBE Formula Sheet</option>
                        <option value="">Diagram Sheet</option>
                    </select>
                </div>
        </div>



        <div className={styles.mainSection3}>
            <div className={styles.mainSection3_a}>
                    <Image src={question} className={styles.question} />
            </div>
        </div>



        <div className={styles.mainSection4}>
            <div className={styles.mainSection4_a}>
                <div className={styles.mainSection4_a1}>
                    <p>Answers</p>
                </div>

                <div className={styles.mainSection4_a2}>
                    <Image src={memo} className={styles.memo} />
                </div>

            </div>

            <div className={styles.mainSection4_b}>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div className={styles.red}>Video Explanation</div>
                            </div>
                            <Image src={youtube_red} alt="Icon" width={25} />
                        </button>
                    </Link>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div>Notes</div>
                            </div>
                            <Image src={doc} alt="Icon" width={25} />
                        </button>
                    </Link>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div>Save</div>
                            </div>
                            <Image src={save} alt="Icon" width={30} />
                        </button>
                    </Link>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div>Download</div>
                            </div>
                            <Image src={download} alt="Icon" width={25} />
                        </button>
                    </Link>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div>Share</div>
                            </div>
                            <Image src={share} alt="Icon" width={25} />
                        </button>
                    </Link>

                    <Link href="/">
                        <button className={styles.button}>
                            <div>
                                <div>Get a tutor</div>
                            </div>
                            <Image src={tutor} alt="Icon" width={25} />
                        </button>
                    </Link>
            </div>
        </div>



        <div className={styles.mainSection5}>

            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className={styles.checkbox}
            />
            <p>I have completed this question</p>
        </div>

        {/* <div className={styles.mainSection6}>
            <div className={styles.mainSection6_a}>
                <div className={styles.mainSection6_a1}>
                    <p>Join the Conversation</p>
                    <Image src={conversation} alt="Icon" width={35} />
                </div>

                <div className={styles.mainSection6_a2}>

                </div>
            </div>

                <div className={styles.mainSection6_b}>
                    <div className={styles.mainSection6_b_1}>
                        <div className={styles.mainSection6_b_1_a}>
                            <p className={styles.mainSection6_b_1_a_1}>
                                <span className={styles.bold}>Rate the difficulty of this question:</span>
                            </p>
                            <div className={styles.mainSection6_b_1_a_2}>
                                <Image src={star_filled} alt="Icon" width={18} />
                                <Image src={star_filled} alt="Icon" width={18} />
                                <Image src={star_filled} alt="Icon" width={18} />
                                <Image src={star_unfilled} alt="Icon" width={20.5} />
                                <Image src={star_unfilled} alt="Icon" width={20.5} />
                            </div>

                        </div>

                        <div className={styles.mainSection6_b_1_b}>
                            <p>See any errors?  <span className={styles.underline}><Link href="/contact">Please let us know here</Link></span></p>
                        </div>

                        <div className={styles.mainSection6_b_1_c}>
                            <p>Want to save your progress? <span className={styles.underline}><Link href="/signup">Sign up here</Link></span></p> 
                        </div>

                    </div>

                    <div className={styles.mainSection6_b_2}>
                        <div><Link href="/dashboard"><Image src={door} alt="Icon" width={50}/></Link></div>
                        <div><p>Back to student dashboard</p></div>
                    </div>

                </div>
            </div> */}

        </div>
)
}
