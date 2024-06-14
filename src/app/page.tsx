import styles from "./page.module.css";
import { Header } from "./components/Header/Header";
import { SectionQuote } from "./components/SectionQuote/SectionQuote";
import { SectionCallback } from "./components/SectionCallback/SectionCallback.jsx";
import { SectionPortfolio } from "./components/SectionPortfolio/SectionPortfolio";
import { Footer } from "./components/Footer/Footer";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SectionTitle />
      <SectionCallback />
      <SectionPortfolio />
      <SectionQuote />
      <Footer />
    </main>
  );
}
