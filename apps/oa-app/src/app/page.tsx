import Link from 'next/link';

export default function Index() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Home page!</h1>
      <div className="flex justify-center space-x-4">
        <Link href="/new-page">
          <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Go to New Page</p>
        </Link>
        <Link href="/old-page-1">
          <p className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Go to Old Page</p>
        </Link>
      </div>
    </div>
  );
}
