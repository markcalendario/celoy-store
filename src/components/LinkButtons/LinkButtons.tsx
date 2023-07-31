import styles from "./LinkButtons.module.scss";

type TLinkButton = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  href?: string;
};

export default function LinkButton(props: TLinkButton) {
  const { children, className, href } = props;

  return (
    <a
      href={href}
      className={styles.linkButton + (className ? " " + className : "")}>
      {children}
    </a>
  );
}
