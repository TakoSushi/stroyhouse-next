import "./roundBtn_tamp.css";

interface IRoundBtn {
  children: React.ReactNode;
  onClick?: () => void;
  classSpecify?: string;
  type?: 'button' | 'submit' | 'reset';
}
export function RoundBtn({ children, onClick, classSpecify = '', type = "button" }: IRoundBtn) {

  return (
    <a href="tel:+74956455430" >
      <button type={type} className={`RoundBtn ${classSpecify}`} onClick={onClick}>
        {children}
      </button>
    </a>
  );
}
