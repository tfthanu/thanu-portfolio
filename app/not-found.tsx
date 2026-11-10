import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="glass max-w-lg rounded-3xl p-10 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mb-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mb-8 text-muted">
          The page you are looking for might have moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accentBlue px-6 py-3 text-sm font-medium text-slate-950 transition-transform hover:scale-[1.02]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
