import Link from 'next/link'
import Image from 'next/Image';
import logo from '../images/Logo.png'


const Navigation = () => {
  return (
    <nav>
      <div>
          <Image src={logo}  alt='/' layout="intrinsic"

              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" 
              width={320} 
              height={100}
          />
              
      </div>
      
      <div className='navItems' > 
          <Link className='navItem' href="/">
            <p>Home</p>
          </Link>

          <Link className='navItem' href="/dashboard">
            <p>Dashboard</p>
          </Link>

          <Link className='navItem' href="/signup">
            <p>Sign Up</p>
          </Link>

          <Link className='navItem' href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>

    </nav>
  )
}

export default Navigation
