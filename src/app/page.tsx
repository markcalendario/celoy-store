import Button from "@/components/Buttons/Buttons";
import Navbar from "@/components/Navbars/Navbars";
import Section, {
  SectionContainer,
  SectionTitle,
  SectionWrapper
} from "@/components/Sections/Sections";
import { Fragment } from "react";
import styles from "./page.module.scss";

export default function LandingPageCompiled() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <NewProducts />
    </Fragment>
  );
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

function NewProducts() {
  return (
    <Section>
      <SectionContainer>
        <SectionTitle
          title="New Products"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            officia."
        />
        <SectionWrapper>
          <h1>hi</h1>
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}
