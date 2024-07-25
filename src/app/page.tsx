import Link from 'next/link';

import Description from '@/_components/Description';
import Header from '../_components/Header';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <Header />
      <div className="flex content-center flex-col h-screen justify-evenly">
        <Description />
        <div className="flex justify-center">
          <Link href="/search">
            <button
              type="button"
              className="flex text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Find weather for your address{'  '}
              {
                <span>
                  <svg
                    className="w-5 h-5 p-1 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </span>
              }
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
