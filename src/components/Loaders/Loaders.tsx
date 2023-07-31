import styles from "./Loaders.module.scss";

export default function Loader() {
  return (
    <div className={styles.rippleLoader}>
      <div className={styles.ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
