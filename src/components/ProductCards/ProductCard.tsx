import { TProduct } from "@/types/products";
import styles from "./ProductCard.module.scss";

export interface IProductCard extends TProduct {
  id?: string;
  className?: string;
}

export default function ProductCard(props: IProductCard) {
  const { id, className, image, name, price, pid, link, sizes, variants } =
    props;

  return (
    <a
      id={id}
      className={styles.product + (className ? " " + className : "")}
      href={link}>
      <div className={styles.wrapper}>
        <img src={image} alt={name} />
        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>{price}</p>
          {sizes !== null ? (
            <div className={styles.sizes}>
              {sizes.map((size) => (
                <p key={size} className={styles.size}>
                  {size}
                </p>
              ))}
            </div>
          ) : null}

          {variants !== null ? (
            <div className={styles.variants}>
              {variants.map((variant) => (
                <p key={variant} className={styles.variant}>
                  {variant}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}
