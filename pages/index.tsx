import Head from 'next/head'
import useStore from '@/store/main.store' // https://nextjs.org/docs/advanced-features/module-path-aliases

export default function Home() {
  const state = useStore()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ 'm-[22px]' }>
        <h1>Hello {state.members}!</h1>
        <button className="bg-green-500 text-white p-1 mt-4" onClick={ () => state.update(Math.random())}>Update</button>
      </main>
    </div>
  )
}
