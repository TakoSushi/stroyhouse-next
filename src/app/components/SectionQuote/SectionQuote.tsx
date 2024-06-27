import Image from "next/image";
import owner from "../../../../public/images/owner.jpg";
import signature from "../../../../public/images/signatureOwnerFigma.png"
import "./sectionQoute_tamp.css";

export function SectionQuote() {
  return (
    <div className="sectionWrapper">
      <section className="sectionQuote">
        <blockquote className="sectionWrapperBlockquote">
          <p className="quoteText">
            Контакт с заказчиком длится долгие годы. И всегда когда нужна помощь
            наши менеджеры на связи и мы всегда откликнемся и поможем. Заказчики
            нас просто рекомендуют
          </p>
          <Image
            className="ownerSignature"
            src={signature}
            alt="Подпись Эдуарда Меньшикова"
          />
        </blockquote>
        <figure className="ownerImgContainer">
          <Image
            className="ownerImg"
            src={owner}
            alt="Протрет Эдуарда Меньшикова"
          />
          <figcaption className="ownerImgFigcaption">
            Эдуард Меньшиков
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
