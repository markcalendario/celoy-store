"use client";

import Footer from "@/components/Footers/Footers";
import Loader from "@/components/Loaders/Loaders";
import Navbar from "@/components/Navbars/Navbars";
import { TProduct } from "@/types/products";
import { Fragment, useCallback, useEffect, useState } from "react";
import styles from "./page.module.scss";

type TProductViewerProps = {
  params: { id: string };
};

export default function ProductCompiled({ params }: TProductViewerProps) {
  return (
    <Fragment>
      <Navbar />
      <Product id={params.id} />
      <Footer />
    </Fragment>
  );
}

function Product({ id }: { id: string }) {
  const [product, setProduct] = useState<null | TProduct>(null);

  const fetchProduct = useCallback(async () => {
    const respose = await fetch("/assets/data/products.json");
    const products: TProduct[] = await respose.json();

    for (const product of products) {
      if (product.pid !== id) continue;

      setProduct(product);
      break;
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (product === null) {
    return <Loader />;
  }

  return (
    <section id={styles.product}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.productImage}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
          <div className={styles.details}>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            {product.variants ? (
              <div className={styles.variants}>
                {product.variants.map((variant) => (
                  <p key={variant}>{variant}</p>
                ))}
              </div>
            ) : null}

            {product.sizes ? (
              <div className={styles.sizes}>
                {product.sizes.map((size) => (
                  <p key={size}>{size}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
