import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
    return(
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
                <div className={styles.imgContainer}>
                    <Image src={coverPhoto.url} alt="" width={600} height={300} />
                </div>
            </Link>
                <div className={styles.details}>
                    <p className={styles.title}>{ title }</p>
                    <div className={styles.authdetails}>
                        <Image src={author.avatar.url} alt="" width={40} height={40} />
                        <div className={styles.authtext}>
                            <span>{ author.name }</span>
                            <span>{ datePublished }</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}