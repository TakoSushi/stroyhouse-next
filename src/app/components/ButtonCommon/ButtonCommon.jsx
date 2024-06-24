import "./buttonCommon_tamp.css";

export function ButtonCommon({ children, type = "button", classSpecify = "", size = "medium" }) {

  const sizeStile = size === "large" ? "commonBtnSizeLarge" : "commonBtnSizeMedium";

  return <button type={type} className={`commonBtn ${sizeStile} ${classSpecify}`}>{children}</button>;
}
