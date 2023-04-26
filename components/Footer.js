import Link from 'next/link'
import Image from 'next/image';
import facebook from '/public/images/facebook.png'
import whatsapp from '/public/images/whatsapp.png'
import youtube from '/public/images/youtube.png'
import logo from '/public/images/Logo_no_slogan.png'


const Footer = () => {
    return (
    <footer>
        
        <div className='footDiv1'>

            <Image src={logo}  alt='/' layout="intrinsic"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw" 
                width={210} 
                height={100}
            />

            </div>

        <div className='footDiv2'>

            <Link className='footItem' href="/contact">
                <p>Get in touch</p>
            </Link>

            <Link className='footItem' href="/about">
                <p>About Us</p>
            </Link>

            <Link className='footItem' href="/donate">
                <p>Donate</p>
            </Link>

            <Link className='footItem' href="/become_a_tutor">
                <p>Become a Tutor</p>
            </Link>

            <Link className='footItem' href="/FAQs">
                <p>FAQs</p>
            </Link>

            <Link className='footItem' href="/api_documentation">
                <p>API</p>
            </Link>

        </div>

        <div className='footDiv3'>

            <Link className='mediaLink' href="/">
                <Image src={whatsapp}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={51} 
                    height={35}
                />
            </Link>

            <Link className='mediaLink' href="/">
                <Image src={youtube}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={51} 
                    height={35}
                />
            </Link>

            <Link className='mediaLink' href="/">
                <Image src={facebook}  alt='/' layout="intrinsic"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw" 
                    width={51} 
                    height={35}
                />
            </Link>
            
        </div>

        <div className='footDiv4'>
            <div className='insideDiv1'>

            </div>
            <p className='insideDiv1'>© 2023 Past Paper Hub. All Rights Reserved.</p>

            <div className='insideDiv3'>
            
                <Link className='smallFootItem' href="/privacy_policy">
                    <p>Privacy Policy</p>
                </Link>

                <Link className='smallFootItem' href="/cookies_policy">
                    <p>Cookies Policy</p>
                </Link>

                <Link className='smallFootItem' href="/ts_and_cs">
                    <p>Terms and Conditions</p>
                </Link>
            </div>
        </div>
    </footer>
    )
}

export default Footer