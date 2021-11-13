import Head from 'next/head'

const box = "p-4 rounded-sm text-gray-700 border-4 border-blue-300"

const Home = () => (
  <div className="mx-auto container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="text-gray-700 text-4xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="text-green-400">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="grid grid-cols-2 gap-3">
        <a href="https://nextjs.org/docs" className={box}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={box}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={box}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new" className={box}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  </div>
)

export default Home
