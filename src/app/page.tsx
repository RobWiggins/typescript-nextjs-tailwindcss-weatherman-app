import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <div className="text-5xl text-slate-200 font-bold underline p-7">
        <h1>Weatherman</h1>
      </div>
      <div>
        <Link href="/search">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Find weather for your address
          </button>
        </Link>
      </div>
    </main>
  );
}
