"use client";

import Footer from "@/components/Footers/Footers";
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

export default function ProductsCompiled() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ProductList />
      <Footer />
    </Fragment>
  );
}

function Hero() {
  return (
    <section id={styles.productHero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Our Products</h1>
          <p>
            Customize your style with our personalized printing services.
            T-shirts, phone cases, and more. Express yourself today! High
            quality, fast turnaround. Satisfaction guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductList() {
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
    <Section id={styles.productList}>
      <SectionContainer>
        <SectionTitle title="Our Products" />
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
              className={styles.productCard}
            />
          ))}
        </SectionWrapper>
      </SectionContainer>
    </Section>
  );
}
