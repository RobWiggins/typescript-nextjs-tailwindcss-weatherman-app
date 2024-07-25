'use client';

import { API_BASE_ENDPOINT } from 'api.config';
import { useState } from 'react';

import Header from '@/_components/Header';

export default function Search() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const queryString = encodeURIComponent(address);
      const res = await fetch(API_BASE_ENDPOINT + `/search?address=${queryString}`);
      setError(false);
      console.log(res);
    } catch (e) {
      setError(true)
      console.log(e)
      // ! possibly set error string
    }
  }

  return (
    <main className="flex flex-col justify-center text-center">
      <Header />
      <div className="text-2xl text-slate-200 p-8">
        <p>Search by address or name</p>
      </div>
      <form className="max-w-2xl mx-auto w-11/12" onSubmit={handleSubmit}>
        <label htmlFor="addressSearch" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="addressSearch"
            name="addressSearch"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="555 5th Ave New York NY 10017 US"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Search Address
          </button>
        </div>
      </form>
    </main>
  );
}
