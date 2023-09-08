import { Children } from 'react'
import styles from './Layout.module.css'
import Link from 'next/link'

function Layout({Children}) {
    return(
        <>
        <header className={styles.header}>
            <Link href='/'>
            <h2>carSell</h2>
            <p>choose and buy your car </p>
            </Link>
        </header>
        <div className={styles.container}>
        {Children}
        </div>
        <footer className={styles.footer}>
        CarSell Next.js project
        </footer>
        </>
    )
}

export default Layout