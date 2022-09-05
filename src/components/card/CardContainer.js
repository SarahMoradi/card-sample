import styles from "./card.module.css";
const CardContainer = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.left_section}>left</div>
        <div className={styles.right_section}>right</div>
      </div>
    </div>
  );
};
export default CardContainer;
