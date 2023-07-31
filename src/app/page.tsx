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
import { Fragment, useEffect, useState } from "react";
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

  const fetchProducts = async () => {
    const response = await fetch("/assets/data/products.json");
    const result = await response.json();
    setProducts(result);
    console.log(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products === null) {
    return <Loader />;
  }

  return (
    <Section id="new" className={styles.newProducts}>
      <SectionContainer>
        <SectionTitle
          title="New Products"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, officia."
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
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              temporibus dolorem omnis amet possimus consequatur voluptas
              perspiciatis laboriosam? Totam harum facilis, excepturi non sed
              animi ipsum aperiam laboriosam tempora ratione.
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
