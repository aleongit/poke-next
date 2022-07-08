// components/layout.js
import Navbar from "./navbar";
import Footer from "./footer";
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode;
};

export const siteTitle = 'pokenext by aleon'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Example website using Next.js"/>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
