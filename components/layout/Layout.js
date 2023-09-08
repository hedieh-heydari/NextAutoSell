
import styles from './Layout.module.css'
import Link from 'next/link'

function Layout({children }) {
    return(
        <>
        <header className={styles.header}>
            <Link href='/'>
            <h2>carSell</h2>
            <p>choose and buy your car </p>
            </Link>
        </header>
        <div className={styles.container}>
        {children }
        </div>
        <footer className={styles.footer}>
        CarSell Next.js project
        </footer>
        </>
    )
}

export default Layout