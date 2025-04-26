import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-medium">404</h1>
        <p className="text-xl mt-4">Page not found</p>
        <Link href="/" className="mt-6 inline-block underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
