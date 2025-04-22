import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-md md:max-w-2xl px-4 py-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Qabiir. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Instagram
        </Link>
        <Link
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          LinkedIn
        </Link>
        <Link
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          ArtStation
        </Link>
      </div>
    </footer>
  );
}
