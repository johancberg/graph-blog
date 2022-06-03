import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BlogCard.module.css'

export default function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
    return(
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
                <div className={styles.imgContainer}>
                    <Image src={coverPhoto.url} alt="" width={600} height={300} />
                    <p className={styles.title}>{ title }</p>
                    <span>{ author.name }</span> <span>{ datePublished }</span>
                </div>
            </Link>
        </div>
    )
}