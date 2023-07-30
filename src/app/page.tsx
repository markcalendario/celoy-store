import Button from "@/components/Buttons/Buttons";
import Footer from "@/components/Footers/Footers";
import Navbar from "@/components/Navbars/Navbars";
import ProductCard from "@/components/ProductCards/ProductCard";
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
      <About />
      <Footer />
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
    <Section id={styles.newProducts}>
      <SectionContainer>
        <SectionTitle
          title="Our Products"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, officia."
        />
        <SectionWrapper className={styles.wrapper}>
          <ProductCard
            className={styles.product}
            image="/assets/images/products/1.jpg"
            price={1200}
            prodId={1}
            name="Gray and White T-Shirt"
            sizes={["M", "L", "XL"]}
            variants={["White", "Gray"]}
            link="/product/1"
          />
          <ProductCard
            className={styles.product}
            image="/assets/images/products/2.jpg"
            price={1200}
            prodId={2}
            name="White Tote Bag"
            sizes={["M", "L", "XL"]}
            variants={["White", "Gray", "Black"]}
            link="/product/1"
          />
          <ProductCard
            className={styles.product}
            image="/assets/images/products/3.jpg"
            price={1200}
            prodId={3}
            name="White PUPian Hoodie"
            sizes={["M", "L"]}
            variants={["Black", "White"]}
            link="/product/2"
          />
          <ProductCard
            className={styles.product}
            image="/assets/images/products/4.jpg"
            price={1200}
            prodId={1}
            name="Customized Phone Case"
            sizes={[]}
            variants={[]}
            link="/product/1"
          />
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}

function About() {
  return (
    <Section id={styles.about}>
      <SectionContainer>
        <SectionWrapper className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              temporibus dolorem omnis amet possimus consequatur voluptas
              perspiciatis laboriosam? Totam harum facilis, excepturi non sed
              animi ipsum aperiam laboriosam tempora ratione.
            </p>
            <Button className="bg-slate-9 text-slate">Explore more.</Button>
          </div>
          <div className={styles.right}>
            <img src="/assets/images/logo.jpg" alt="brand logo" />
          </div>
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}
