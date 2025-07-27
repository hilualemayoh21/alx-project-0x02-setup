import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to the ALX Next.js Project 🚀
        </h1>
      </main>
    </>
  );
}
