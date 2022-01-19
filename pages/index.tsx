import Head from "next/head";
import ThemeToggleButton from "../components/theme-toggle-button";

export default function Home() {
  const searchPlaceholder = (): string => {
    const exampleFood = [
      "Råbiff",
      "Vitlökspizza",
      "Pad Thai",
      "Tryffelpasta",
      "Sushi",
    ];
    return exampleFood[Math.floor(Math.random() * exampleFood.length)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-slate-800 dark:text-white">
      <ThemeToggleButton />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Är du <span className="text-red-700">hungrig?</span>
        </h1>

        <p className="mt-3 text-2xl italic">
          Sök efter maträtten du är sugen på nedan.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="flex border-2 rounded bg-white text-black">
            <button className="flex items-center justify-center px-4 border-r">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
            <input
              type="text"
              className="px-4 py-2 w-80 outline-none"
              placeholder={searchPlaceholder()}
            />
          </div>
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
