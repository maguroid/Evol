import Head from "next/head";
export default function Mint() {
  // TODO: write later
  async function mint() {
    return null;
  }

  return (
    <>
      <Head>
        <title>Evol - Mint</title>
        <meta name="description" content="Mint your Evol ID!" />
      </Head>

      <div className="grid gap-y-5">
        <h1 className="text-cyan-500 text-3xl font-bold text-center">
          Mint your EVOL ID!
        </h1>

        <div className="text-center font-bold text-lg">You are able to:</div>

        <ul className="inline-grid gap-y-2">
          <li className="text-center">
            <span className="highlight">
              get EVOL token when complete your task
            </span>
          </li>

          <li className="text-center">
            <span className="highlight">
              get early access of new services and events
            </span>
          </li>

          <li className="text-center">
            <span className="highlight">
              stake your EVOL, getting more EVOL
            </span>
          </li>
        </ul>

        <div className="m-auto">
          <button className="button hover:animate-pulse" onClick={mint}>
            Mint now!
          </button>
        </div>
      </div>
    </>
  );
}
