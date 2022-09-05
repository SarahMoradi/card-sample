import styles from "./leftcard.module.css";
const LeftCard = () => {
  return (
    <>
      <div className={styles.left_info_container}>
        <div className={styles.level_container}>LEVEL 13</div>
        <div className={styles.image_container}>
          <img
            src={process.env.PUBLIC_URL + "logo.png"}
            alt="logo"
            width={100}
          />
        </div>
        <div className={styles.points_container}>5,312 POINTS</div>
      </div>
      <div className={styles.left_card_details}>
        <h1 className={styles.header_section}>Jane Doe</h1>
        <div className={styles.header_info}>
          <p>Group Name</p>
          <p>Joined January 2019</p>
        </div>
        <div className={styles.header_info}>
          <p>Position/Role</p>
          <p>City, Country</p>
        </div>
        <div className={styles.options}>
          <div>
            <p>AWARDS</p>
            <i class="fas fa-medal" style={{ fontSize: "30px" }}></i>
            <p>2</p>
          </div>
          <div>
            <p>MATCHES</p>
            <i class="fas fa-gamepad" style={{ fontSize: "30px" }}></i>
            <p>126</p>
          </div>
          <div>
            <p>PALS</p>
            <i class="fa fa-group" style={{ fontSize: "30px" }}></i>
            <p>280</p>
          </div>
          <div>
            <p>COFFEE</p>
            <i class="fa fa-coffee" style={{ fontSize: "30px" }}></i>
            <p>30</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftCard;
