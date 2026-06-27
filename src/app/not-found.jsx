import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-950 text-white px-6">
      <div className="text-center max-w-md">
        <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.4em] mb-4">404</p>
        <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist, or may have been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/">
            <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500 transition-colors">
              Go Home
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="rounded-full border border-slate-700 text-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
