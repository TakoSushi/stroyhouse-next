import styles from "./styles/index.module.css";

export function ButtonCommon({ children, type = "button", classSpecify = "", size = "medium" }) {

  const sizeStile = size === "large" ? styles.commonBtnSizeLarge : styles.commonBtnSizeMedium;

  return <button type={type} className={`${styles.commonBtn} ${sizeStile} ${classSpecify}`}>{children}</button>;
}
