import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center gap-5 rounded-md mt-20">
        <h1 className="text-3xl text-white leading-[32px]">Bruh...</h1>
        <p>Page does not exist. Please go back.</p>
        <Link
          href="/"
          className="px-4 py-2 rounded-full border border-slate-100 hover:border-purple-400 hover:text-purple-400 transition-colors duration-300 ease-in-out"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
