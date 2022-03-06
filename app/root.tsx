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
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:100,300|Open+Sans:400,700|Source+Code+Pro:400,700',
  },
];

export const meta: MetaFunction = () => {
  return { title: 'Bespoke Software Group' };
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
      <body className="flex flex-col font-sans bg-white">
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
