import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-blue-600">ToS Analyzer</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
