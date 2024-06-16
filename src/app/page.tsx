import styles from "./page.module.css";
import { Header } from "./components/Header/Header";
import { SectionQuote } from "./components/SectionQuote/SectionQuote";
import { SectionCallback } from "./components/SectionCallback/SectionCallback.jsx";
import { SectionPortfolio } from "./components/SectionPortfolio/SectionPortfolio";
import { Footer } from "./components/Footer/Footer";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { SectionMap } from "./components/SectionMap/SectionMap";
import { SectionVideo } from "./components/SectionVideo/SectionVideo";
import { SectionRules } from "./components/SectionRules/SectionRules";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SectionTitle />
      <SectionRules />
      <SectionVideo />
      <SectionCallback />
      <SectionPortfolio />
      <SectionQuote />
      <SectionMap />
      <Footer />
    </main>
  );
}
