import Link from "next/link"

export default function Nav() {
    return (
        <header className="bg-gray-800 py-4">
            <nav className="container mx-auto flex items-center justify-between">
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-white">Home</Link></li>
                    <li><Link href="/blog" className="text-white">Blog</Link></li>
                    <li><Link href="/about" className="text-white">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}