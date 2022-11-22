import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <title>Room key mapper</title>
      </Head>
      <Nav />
      <main>
        <div className="mx-auto my-16 flex w-2/4 items-center justify-center rounded-lg bg-white p-16">
          <div className="text-2xl font-medium">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
