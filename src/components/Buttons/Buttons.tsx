import styles from "./Buttons.module.scss";

type ButtonPropsTypes = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
};

export default function Button(props: ButtonPropsTypes) {
  const { children, className, onClick } = props;

  return (
    <button
      className={styles.button + (className ? " " + className : "")}
      onClick={onClick}>
      {children}
    </button>
  );
}
