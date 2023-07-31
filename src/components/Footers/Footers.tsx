import styles from "./Footers.module.scss";

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.column + " " + styles.brandColumn}>
            <h1>CELOY</h1>
            <div className={styles.content}>
              <p>&copy; {new Date().getFullYear()} CELOY.</p>
              <p>All Right Reserved.</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <h2>Developers</h2>
              <a href="https://github.com/markcalendario/CELOY-ecommerce">
                Calendario, Mark Kenneth
              </a>
              <p>Enrico, Carl Andrei</p>
              <p>Levardo, John Race</p>
              <p>Yim, Gwyneth Anmarie</p>
              <p>Ong, Zoe Tatianna</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <h2>Project</h2>
              <p>CS 2-3 | E-Commerce</p>
            </div>
            <div className={styles.content}>
              <h2>Technology</h2>
              <p>Next.JS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
