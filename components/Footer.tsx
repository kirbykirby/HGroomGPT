import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        版权
        <a
          href="https://123ppw.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          所有{" "}
        </a>
        <a
          href="https://www.123ppw.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline hover:text-gray-300 transition underline-offset-2"
        >
          微销团队
        </a>
      </div>
    </footer>
  );
}