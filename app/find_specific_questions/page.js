import Link from 'next/link'
import Image from 'next/Image';
import styles from "./page.module.css";
import target from '/public/images/target.gif'
import basket from '/public/images/shopping_basket.gif'

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


export default function Home() {
return (
    <div className={styles.main}>
        
        <div className={styles.mainSection1}>
            <p>Let's be more specific...</p>
        </div>

        <div className={styles.mainSection2}>

            <div className={styles.mainSection2a}>
                <Image src={target}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={150} 
                    height={50}
                />

                <Link href="/question_and_memo">
                    <button className={styles.particularButt}  >
                        <div>I know which past paper</div> 
                        <div>I want to do</div>
                    </button>
                </Link>

            </div>
            
            <div className={styles.mainSection2b}>
                <p>OR</p>
            </div>

            <div className={styles.mainSection2c}>

            <Image src={basket}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={150} 
                    height={50}
                />

                <Link href="/question_and_memo">
                    <button className={styles.basketButt}  >
                        <div>Give me random </div>
                        <div>questions based on</div>
                        <div>specific topics</div>
                    </button>
                </Link>

                <p className={styles.text}>*Great for test preparation</p>
                
            </div>


        </div>

    </div>
)
}
