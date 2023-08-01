"use client";

import Footer from "@/components/Footers/Footers";
import LinkButton from "@/components/LinkButtons/LinkButtons";
import Loader from "@/components/Loaders/Loaders";
import Navbar from "@/components/Navbars/Navbars";
import ProductCard from "@/components/ProductCards/ProductCard";
import Section, {
  SectionContainer,
  SectionTitle,
  SectionWrapper
} from "@/components/Sections/Sections";
import { TProduct } from "@/types/products";
import { Fragment, useCallback, useEffect, useState } from "react";
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
          <h1>Made for every PUPian.</h1>
          <p>Feel authentic. Feel like a ⭐Iskolar ng Bayan⭐.</p>
          <LinkButton href="/products" className="bg-slate text-slate-7">
            View Products
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function NewProducts() {
  const [products, setProducts] = useState<TProduct[] | null>(null);

  const fetchProducts = useCallback(async () => {
    const response = await fetch("/assets/data/products.json");
    const result = await response.json();
    setProducts(result);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (products === null) {
    return <Loader />;
  }

  return (
    <Section id="new" className={styles.newProducts}>
      <SectionContainer>
        <SectionTitle
          title="New Products"
          description="Check out these newly arrived printed tees, tote bags and phone cases."
        />
        <SectionWrapper className={styles.wrapper}>
          {products.map((product: TProduct) => (
            <ProductCard
              key={product.pid}
              pid={product.pid}
              name={product.name}
              price={product.price}
              sizes={product.sizes}
              variants={product.variants}
              link={"/product/" + product.pid}
              image={product.image}
              className={styles.product}
            />
          ))}
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" className={styles.about}>
      <SectionContainer>
        <SectionWrapper className={styles.wrapper}>
          <div className={styles.left}>
            <h1>Unleash Your Imagination, Printed to Perfection!</h1>
            <p>
              CELOY is a company founded by PUP students just like you. We have
              the products that surely suit you up, tested and approved by
              students themselves. Feel good with us. CELOY has the quality that
              never goes out of style.
            </p>
            <p>
              At CLOY, we believe that creativity knows no bounds. Whether
              it&apos;s designing custom clothing that reflects your style,
              personalizing mugs that warm your heart every morning, or crafting
              any other customized item that holds a special meaning, we are
              here to turn your ideas into reality.
            </p>
            <p>
              So come on this journey with us, where dreams come to life, and
              the joy of personalized printing awaits. Let CLOY be the canvas
              for your imagination and together, let&apos;s make your world a
              little more colorful, one print at a time.
            </p>
            <LinkButton href="/products" className="bg-slate-9 text-slate">
              Explore more.
            </LinkButton>
          </div>
          <div className={styles.right}>
            <img src="/assets/images/logo.jpg" alt="brand logo" />
          </div>
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}
