import "@styles/tailwind.scss";
import Header from "@layout/Header";
import Footer from "@layout/Footer";

export default function PortfolioApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
