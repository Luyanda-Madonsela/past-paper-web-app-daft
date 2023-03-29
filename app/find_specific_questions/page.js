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
            <p>Lets fine-tune your request a little more...</p>
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

                <Link href="/">
                    <button className={styles.particularButt}  >
                        <div>I know the question</div> 
                        <div>I want to find</div>
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

                <Link href="/">
                    <button className={styles.basketButt}  >
                        <div>I want to select multiple </div>
                        <div>questions based on</div>
                        <div>specific topics</div>
                    </button>
                </Link>
                <div className={styles.text}>*Great for test preparation</div>

            </div>

        </div>

    </div>
)
}
