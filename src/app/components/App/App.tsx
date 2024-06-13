import { Main } from "../../pages/main/Main";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./styles/index.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
