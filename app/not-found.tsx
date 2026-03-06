import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-black/50">404</p>
        <h1 className="mt-3 text-4xl font-black">Page Not Found</h1>
        <p className="mt-4 text-black/70">The page you requested does not exist. Go back to Abdul Rehman&apos;s portfolio homepage.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
