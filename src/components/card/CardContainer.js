import styles from "./card.module.css";
const CardContainer = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.left_section}>
          <div>
            <div className={styles.level_container}>LEVEL 13</div>
            <div className={styles.image_container}>
              <img
                src={process.env.PUBLIC_URL + "logo.png"}
                alt="logo"
                width={80}
              />
            </div>
            <div className={styles.points_container}>5,312 POINTS</div>
          </div>
        </div>
        <div className={styles.right_section}>right</div>
      </div>
    </div>
  );
};
export default CardContainer;
