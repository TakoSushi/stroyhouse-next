import owner from "../../assets/images/owner.png";
import signature from "../../assets/images/signatureOwnerFigma.png";
import styles from "./styles/index.module.css";
import Image from "next/image";

export function SectionQuote() {
  return (
    <div className="sectionWrapper">
      <section className={styles.sectionQuote}>
        <blockquote className={styles.blockquote}>
          <p className={styles.quoteText}>
            Контакт с заказчиком длится долгие годы. И всегда когда нужна помощь
            наши менеджеры на связи и мы всегда откликнемся и поможем. Заказчики
            нас просто рекомендуют
          </p>
          <Image
            className={styles.ownerSignature}
            src={signature}
            alt="Подпись Эдуарда Меньшикова"
          />
        </blockquote>
        <figure className={styles.ownerImgContainer}>
          <Image
            className={styles.ownerImg}
            src={owner}
            alt="Протрет Эдуарда Меньшикова"
          />
          <figcaption className={styles.ownerImgFigcaption}>
            Эдуард Меньшиков
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
