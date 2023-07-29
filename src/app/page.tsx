import Button from "@/components/Buttons/Buttons";
import styles from "./page.module.scss";

export default function LandingPageCompiled() {
  return <Hero />;
}

function Hero() {
  return (
    <section id={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            officia?
          </p>
          <Button>View Products</Button>
        </div>
      </div>
    </section>
  );
}
