import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            <button className="text-lg font-bold">Course Selling Platform</button>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/signin">
            <button>Signin</button>
          </Link>
          <Link href="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
