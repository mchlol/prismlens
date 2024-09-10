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

export default function App() {
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
    <body className="mt-[6rem] font-inter flex flex-col justify-between min-h-[100vh] max-w-[1240px] mx-auto leading-relaxed text-blueblack grad-serenity">
      <div className="w-full bg-purplegrey fixed top-0 left-0 z-30 blurnav">
        <NavBar />
      </div>
      <main className="min-h-[calc(100vh-8rem)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
  )
}
