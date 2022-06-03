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
                    <Image src={author.avatar.url} alt="" width={20} height={20} /><span>{ author.name }</span>
                </div>
                <div className={styles.date}>
                    <span>{ datePublished }</span>
                </div>
        </div>
    )
}