import styles from '../../styles/Slug.module.css'
import Image from 'next/image'
import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3xdwp800e0u01z01nlj1uzb/master')

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            id,
            title,
            slug,
            datePublished,
            author{
                id,
                name,
                avatar{
                    url
                }
            }
            content{
                html
            }
            coverPhoto{
                id
                url
            }
        }
    }
`

const SLUGLIST = gql`
    {
        posts {
            slug
        }
    }
`

export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug }})),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post
    return {
        props: {
        post
        },
        revalidate: 10,
    }
}

export default function Slug({ post }){
    return (
    <main className={styles.blog}>
        <Image src={post.coverPhoto.url} className={styles.cover} alt="" width={800} height={450} />
        <div className={styles.title}>
            <div className={styles.authdetails}>
                <Image src={post.author.avatar.url} alt="" width={40} height={40} />
                <div className={styles.authtext}>
                    <h6>By {post.author.name}</h6>
                    <h6 className={styles.date}>{post.datePublished}</h6>
                </div>
            </div>
        </div>
        <h2>{post.title}</h2>
        <div className={styles.content}
            dangerouslySetInnerHTML={{__html: post.content.html}}>
        </div>
    </main>
    )
}