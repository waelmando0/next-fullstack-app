import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

import Footer from '../components/navigation/footer/Footer';
import Header from '../components/navigation/header/Header';
import { mockHeaderProps } from '../components/navigation/header/Header.mocks';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Header {...mockHeaderProps.base} />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
