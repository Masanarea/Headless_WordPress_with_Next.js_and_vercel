import Link from 'next/link'
import DateFormatter from './date-formatter'
import Avatar from './avatar'

export default function PostPreview({ title, coverImage, date, excerpt, slug }) {
    return (
        <div className="border border-gray-200 p-4 rounded-lg hover:shadow-lg transition duration-200">
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <span>{title}</span>
                    {/* <a className="hover:underline">{title}</a> */}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
    )
}