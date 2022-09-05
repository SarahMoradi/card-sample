import RightCard from "./right-card/RightCard";
import styles from "./card.module.css";
import LeftCard from "./left-card/LeftCard";
const CardContainer = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.left_section}>
          <LeftCard />
        </div>
        <div className={styles.right_section}>
          <RightCard />
        </div>
      </div>
    </div>
  );
};
export default CardContainer;
