import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProductCard;