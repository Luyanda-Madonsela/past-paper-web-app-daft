import Link from 'next/link'
import Image from 'next/Image';
import styles from './page.module.css'
import physics from '../images/physics.gif'
import chemical from '../images/chemical.png'
import pencil_and_ruler from '../images/pencil-and-ruler.png'
import sqroot from '../images/square-root-of-x-mathematical-signs.png'
import exam from '../images/exam.gif'
import math from '../images/maths.gif'
import writing from '../images/writing_green.png'


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

              </div>

              <div className={styles.div3_Section1}>

              <Image src={physics}  alt='/' layout="intrinsic"

                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" 
                  width={110} 
                  height={50}

              />

              </div>
          
        </div>

        <div className={styles.mainSection2}>

          <h1>Welcome to your <span className={styles.red}>one stop shop</span> for SA’s past papers! How can we help?</h1>

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

                </div>

                <div className={styles.div3_Section3}>

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
                    width={180} 
                    height={30}

                  />

                  </div>

                  <div className={styles.div2_Section4}>

                  </div>

                  <div className={styles.div3_Section4}>

                        <div className={styles.div3_Section4_1}>

                        <Image src={math}  alt='/' layout="intrinsic"

                          sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw" 
                          width={90} 
                          height={30}

                        />
                        </div>
                        
                        <div className={styles.div3_Section4_2}>

                        <Image src={writing}  alt='/' layout="intrinsic"

                          sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw" 
                          width={90} 
                          height={30}

                        />

                        </div>

                  </div>

        </div>

    </main>
  )
}
