import Head from "next/head";
import AlgoliaSearch from "../components/algolia/algolia-search";
import ThemeToggleButton from "../components/theme-toggle-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-slate-800 dark:text-white">
      <div className="">
        <ThemeToggleButton />
      </div>

      <Head>
        <title>[hungrig]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Är du{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            [hungrig]
          </span>
          ?
        </h1>

        <p className="mt-3 text-2xl italic">
          Sök efter maträtten du är sugen på nedan.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <AlgoliaSearch />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center"
          href="https://sv.wikipedia.org/wiki/Aln%C3%B6n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Powered by <span className="font-bold">Mackish the Kock</span>
          </p>
        </a>
      </footer>
    </div>
  );
}
