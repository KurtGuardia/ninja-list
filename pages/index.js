import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Et odit beatae quae, aliquid esse aspernatur!
        Adipisci, corrupti! Adipisci maxime, in consectetur
        eveniet, voluptatibus laudantium suscipit quo, nulla
        impedit at eius.
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Et odit beatae quae, aliquid esse aspernatur!
        Adipisci, corrupti! Adipisci maxime, in consectetur
        eveniet, voluptatibus laudantium suscipit quo, nulla
        impedit at eius.
      </p>
      <a className={styles.btn}>
        {' '}
        <Link href='/ninjas'>See Ninjas Listing</Link>{' '}
      </a>
    </div>
  )
}
