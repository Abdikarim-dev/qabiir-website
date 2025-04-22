import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-md md:max-w-2xl px-4 py-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Qabiir. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href="https://www.instagram.com/qabiir.art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/QabiirGlobal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Facebook
        </Link>
        <Link
          href="https://www.linkedin.com/in/qabiir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
