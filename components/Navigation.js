import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <p>Sign Up</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
