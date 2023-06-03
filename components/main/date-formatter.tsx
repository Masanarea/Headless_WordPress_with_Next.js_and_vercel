
export default function DateFormatter({ dateString }) {
    const date = new Date(dateString)
    return <time dateTime={dateString}>{date.toDateString()}</time>
}