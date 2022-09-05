import styles from "./rightcard.module.css";

const RightCard = () => {
  return (
    <div className={styles.right_info_container}>
      <h1 className={styles.header_section}>Jane Doe</h1>
      <p className={styles.right_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <p className={styles.more_details}>Mouse over the card for more info</p>
    </div>
  );
};
export default RightCard;
