import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PrismLens</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="font-inter flex flex-col justify-between min-h-[100vh] leading-relaxed text-blueblack grad-serenity">
        <NavBar />
        <main className="min-h-[calc(100vh-8rem)]">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
