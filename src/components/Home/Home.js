import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Topbar from "./Topbar";
import LeftSidebar from "./LeftSidebar";
import Middlebar from "./Middlebar";
import RightSidebar from "./RightSidebar";

function Home() {
  return (
    <div className={styles.container}>
      <Topbar />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <LeftSidebar />
        <Middlebar />
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
