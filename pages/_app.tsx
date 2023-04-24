import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />

      <Analytics />
    </>
  );
}

export default MyApp;
