import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Course Selling Platform</h1>
      <div className="flex space-x-4">
        <Link href="/signin">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Signin</button>
        </Link>
        <Link href="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
