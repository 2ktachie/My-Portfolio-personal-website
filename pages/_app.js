import '@/styles/globals.css';
import { Montserrat, Rubik } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Rubik({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
});
import { ThemeProvider } from '@/context/ContextProvider';
import { useEffect } from 'react';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log(
              'Service Worker registered with scope:',
              registration.scope
            );
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/imgs/logo.png" />
        <meta name="theme-color" content="#f0f0ff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="I'm a Software Developer with 2 Years Experience of Self Learning and Projects Experience,"
        />
        <meta name="copyright" content="Tendai Douglas Tachivona" />
        <meta
          name="keywords"
          content="Tendai, Tendai Douglas Tachivona, tendaidouglastachivona, Tendai Douglas, Tachivona, frontend, Front-end, backend, Back-end, fullstack, Full-stack, engineer, Engineer, React, Reactjs, Next, Next.js, Web, webdeveloper, freelancer, uiux, designer, bussiness, web3, PWA, performance, SEO, Optimization"
        />
        <meta name="author" content="Tendai Douglas Tachivona" />
        <meta property="og:title" content="Tendai Douglas Tachivona Software Developer" />
        <meta
          property="og:description"
          content="Hello My Name is Tendai Douglas Tachivona, I'm a Software Developer specalizing in Full Stack development"
        />
        <meta property="og:url" content="(to be added once hosted)" />
        <meta name="robots" content="all" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics mode="production" />
      </ThemeProvider>
    </>
  );
}
