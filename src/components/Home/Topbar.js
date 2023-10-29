import React from "react";
import styles from "./Home.module.css";
import Search from "../../assets/Search.svg";
import Filter from "../../assets/Filter.svg";

function Topbar() {
  return (
    <div className={styles.topBarposition}>
      <div className={styles.logoContainer}>
        <h1
          style={{
            marginLeft: "35px",
            fontWeight: 500,
          }}
        >
          LOGO
        </h1>
      </div>
      <div style={{ display: "flex", position: "relative" }}>
        <div>
          <div className={styles.searchIconsContainer}>
            <img src={Search} className={styles.searchIcons} />
          </div>
          <input
            type="text"
            placeholder="Search here..."
            className={styles.inputBox}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.filterContainer}>
            <div className={styles.filterImgDiv}>
              <img src={Filter} style={{ width: "26px", height: "26px" }} />
            </div>
            <p style={{ display: "flex", alignItems: "center" }}>Filters</p>
          </div>
        </div>
      </div>

      <div className={styles.sellerDiv}>
        <p style={{ color: "#FFF" }}>Become a Seller</p>
      </div>
    </div>
  );
}

export default Topbar;
