import Head from 'next/head'

import Icon from '../components/Icon'
import Card from '../components/Card'

const Home = () => (
  <div className="mx-auto container p-4">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>

    <main>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Card
          icon={
            <Icon name="shortcut" className="text-white"/>
          }
          title="Documentation"
          link="https://nextjs.org/docs"
        >
          <p>Find in-depth information about Next.js features and API.</p>
        </Card>
        <Card
          icon={
            <Icon name="shortcut" className="text-white"/>
          }
          title="Learn"
          link="https://nextjs.org/learn"
        >
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Card>
        <Card
          icon={
            <Icon name="shortcut" className="text-white"/>
          }
          title="Examples"
          link="https://github.com/vercel/next.js/tree/master/examples"
        >
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Card>
        <Card
          icon={
            <Icon name="shortcut" className="text-white"/>
          }
          title="Deploy"
          link="https://nextjs.org/new"
        >
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </Card>
      </div>
    </main>
  </div>
)

export default Home
