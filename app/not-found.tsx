import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='mt-24'>
            <h2 className='text-center text-2xl font-bold'>{`Page not found`}</h2>
            <p className='text-center'>{`The page you're looking for can't be found.`}</p>
            <p className='text-center'>
                <Link href="/" className='underline'>Return Home</Link>
            </p>
        </div>
    )
}