import { Header } from "./components/Header/Header";
import { SectionQuote } from "./components/SectionQuote/SectionQuote";
import { SectionCallback } from "./components/SectionCallback/SectionCallback.jsx";
import { SectionPortfolio } from "./components/SectionPortfolio/SectionPortfolio";
import { Footer } from "./components/Footer/Footer";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { SectionMap } from "./components/SectionMap/SectionMap";
import { SectionVideo } from "./components/SectionVideo/SectionVideo";
import { SectionRules } from "./components/SectionRules/SectionRules";
import { SectionContragents } from "./components/SectionContragents/SectionContragents";
import { SectionAboutCompany } from "./components/SectionAboutCompany/SectionAboutCompany";

import "./page_tamp.css";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <SectionTitle />
      <SectionAboutCompany />
      <SectionRules />
      <SectionVideo />
      <SectionCallback />
      <SectionPortfolio />
      <SectionQuote />
      <SectionContragents />
      <SectionMap />
      <Footer />
    </main>
  );
}
