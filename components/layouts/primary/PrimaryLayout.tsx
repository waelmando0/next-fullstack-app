import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <>
        <Header />
        <div className="flex flex-col min-h-[88vh] overflow-hidden">
          <main>{children}</main>
        </div>
        <Footer />
      </>
    </>
  );
};

export default PrimaryLayout;
