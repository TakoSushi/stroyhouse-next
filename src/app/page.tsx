import styles from "./page.module.css";
import { SectionQuote } from "./components/SectionQuote/SectionQuote";
import { SectionCallback } from "./components/SectionCallback/SectionCallback";
import { SectionPortfolio } from "./components/SectionPortfolio/SectionPortfolio";
import { Footer } from "./components/Footer/Footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <SectionCallback />
      <SectionPortfolio />
      <SectionQuote />
      <Footer />
    </main>
  );
}
