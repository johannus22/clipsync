import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-neutral-800 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <Link href="/">
          <span className="flex items-center gap-3 select-none">
            <img src="/logo.png" alt="ClipSync Logo" className="h-10 w-10" />
            <span className="font-bold text-2xl text-white tracking-tight">SyncPaste</span>
          </span>
        </Link>
      </div>
      <div>
        <a
          href="https://github.com/johannus22/syncpaste"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors text-base font-medium shadow-sm backdrop-blur"
        >
          <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="inline-block"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          <span className="hidden sm:inline">Star us on Github</span>
        </a>
      </div>
    </nav>
  );
}
