import Link from 'next/link'
import Image from 'next/image';
import styles from './page.module.css'
import physics from '/public/images/physics.gif'
import chemical from '/public/images/chemical.png'
import pencil_and_ruler from '/public/images/pencil-and-ruler.png'
import sqroot from '/public/images/square-root-of-x-mathematical-signs.png'
import exam from '/public/images/exam.gif'
import math from '/public/images/maths.gif'
import writing from '/public/images/writing_green.png'
import download from '/public/images/download-pdf.png'
import laptop from '/public/images/laptop.png'
import tutor from '/public/images/tutor.png'
import teacher from '/public/images/teacher_tools.png'
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


export default function Home() {
  return (
    <main className={styles.main}>

        <div className={styles.mainSection1}>

              <div className={styles.div1_Section1}>
                  <Image src={chemical}  alt='/' layout="intrinsic"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" 
                      width={80} 
                      height={30}
                    />
              </div>
              
              <div className={styles.div2_Section1}>
            
                  <div className={styles.section1Butts}>
                      <Link href="/signin">
                        <button className={styles.loginButt}>
                            Log In
                        </button>
                      </Link>

                      <Link href="/signup">
                        <button className={styles.signupButt}  >
                            Sign Up
                        </button>
                      </Link>
                  </div>
                  
                  <Link className={styles.benefitsLink} href="/benefits">Quick overview of all our past papers</Link>

              </div>

              <div className={styles.div3_Section1}>
                  <Image src={physics}  alt='/' layout="intrinsic"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" 
                      width={90} 
                      height={50}
                  />
              </div>
        </div>

        <div className={styles.mainSection2}>
              <p>Your <span className={styles.red}>one stop shop</span> for SA’s past papers - Grade 8 to 12!</p>
        </div>

        <div className={styles.mainSection3}>

                <div className={styles.div1_Section3}>
                    <Image src={pencil_and_ruler}  alt='/' layout="intrinsic"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" 
                      width={40} 
                    />
                </div>

                <div className={styles.div2_Section3}>
                      <Link href="/download_papers">
                        <button className={styles.downloadsButt}>
                            <div>
                                <div>Download</div>
                                <div>Papers</div>
                            </div>
                            <Image src={download} alt="Icon" width={71} />
                        </button>
                      </Link>
                </div>

                <div className={styles.div3_Section3}>
                      <Link href="/find_specific_questions">
                        <button className={styles.findQuestionsButt}>
                            <div>
                                <div>Work On</div>
                                <div>Exam Papers</div>
                            </div>
                            <Image src={laptop} alt="Icon" width={85} height={97} />
                        </button>
                      </Link>
                </div>

                <div className={styles.div4_Section3}>
                    <Image src={sqroot}  alt='/' layout="intrinsic"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" 
                      width={40} 
                    />
                </div>
        </div>

        <div className={styles.mainSection4}>
        
                  <div className={styles.div1_Section4}>
                      <Image src={exam}  alt='/' layout="intrinsic"
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw" 
                        width={120} 
                        height={30}
                      />
                  </div>

                  <div className={styles.div2_Section4}>

                      <Link href="/get_a_tutor">
                        <button className={styles.getTutorButt}>
                            <div>
                                <div>Get A Tutor</div>
                            </div>
                            <Image src={tutor} alt="Icon" width={54} height={54} />
                        </button>
                      </Link>

                      <Link href="/send_us_papers">
                        <button className={styles.sendPapersButt}>
                            <div>
                                <div>Teacher Tools</div>
                            </div>
                            <Image src={teacher} alt="Icon" width={54} height={54} />
                        </button>
                      </Link>

                  </div>

                  <div className={styles.div3_Section4}>

                        <div className={styles.div3_Section4_1}>
                            <Image src={math}  alt='/' layout="intrinsic"
                              sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw" 
                              width={50} 
                              height={30}
                            />
                        </div>
                        
                        <div className={styles.div3_Section4_2}>
                            <Image src={writing}  alt='/' layout="intrinsic"
                              sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw" 
                              width={60} 
                              height={30}
                            />
                        </div>

                  </div>

        </div>

    </main>
  )
}
