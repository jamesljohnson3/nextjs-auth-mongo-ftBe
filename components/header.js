import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.css'

export default function Header() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/test', {
        method: 'POST'
      })
      if (response.ok) {
        // handle success
      } else {
        throw new Error('Failed to send POST request')
      }
    } catch (error) {
      console.error(error)
      // handle error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header>
      <div className={styles.signedInStatus}>
        <p className={styles.loading}>
          {isLoading && <span>Loading...</span>}
        </p>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
          <li className={styles.navItem}>
            <button className={styles.buttonPrimary} onClick={handleSignIn} disabled={isLoading}>
              Sign in
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
