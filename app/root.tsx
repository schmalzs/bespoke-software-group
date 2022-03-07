import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import tailwind from './tailwind.css';

import type { LinksFunction, MetaFunction } from 'remix';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwind },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/icons/site.webmanifest' },
  { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
  { rel: 'shortcut icon', href: '/icons/favicon.ico' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,800|Open+Sans:400,700|Source+Code+Pro:400,700',
  },
];

export const meta: MetaFunction = () => {
  return {
    title: 'Bespoke Software Group',
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/icons/browserconfig.xml',
    'theme-color': '#ffffff',
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col font-sans bg-white text-gray">
        <Header />
        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
