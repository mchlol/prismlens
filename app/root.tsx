import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";
import "./tailwind.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomeButton from "./components/HomeButton";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
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
      <body className="pt-[6rem] font-inter flex flex-col justify-between min-h-[100vh] max-w-[1240px] mx-auto leading-relaxed text-blueblack grad-serenity">
        <div className="w-full bg-purplegrey fixed top-0 left-0 z-30 blurnav">
          <NavBar />
        </div>
        
        <main className="min-h-[calc(100vh-10rem)]">
          <section className="p-8 m-4">
            <h1 className="text-3xl md:text-5xl font-averiaSerifLibre text-purplegrey">The spirits are displeased.</h1>
            <p className="text-ridercream">There's nothing here.</p>
            <HomeButton />
          </section>

        </main>

        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

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
    <body className="pt-[6rem] font-inter flex flex-col justify-between min-h-[100vh] max-w-[1240px] mx-auto leading-relaxed text-blueblack grad-serenity">
      <div className="w-full bg-purplegrey fixed top-0 left-0 z-30 blurnav">
        <NavBar />
      </div>
      
      <main className="min-h-[calc(100vh-10rem)]">
          <Outlet />
      </main>


      <Footer />
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
  )
}
