import React from "react";
import styles from "./Home.module.css";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";

import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";
import post4 from "../../assets/post4.png";
import post5 from "../../assets/post5.png";
import post6 from "../../assets/post6.png";

function RightSidebar() {
  const artists = [
    { avatar: avatar1, name: "Lara Leones", id: "@thewallart", post: post6 },
    {
      avatar: avatar2,
      name: "Thomas J.",
      id: "@thecustomcreater",
      post: post2,
    },
    { avatar: avatar3, name: "Tyler.", id: "@thetyler", post: post3 },
    { avatar: avatar4, name: "Thiago.", id: "@thethiago", post: post4 },
    { avatar: avatar5, name: "Tristan", id: "@thetristan", post: post5 },
    { avatar: avatar6, name: "Tobias", id: "@thetobias", post: post1 },
  ];
  return (
    <div style={{ width: "260px", marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <p style={{ fontWeight: 600 }}>Artists</p>
        <p style={{ marginLeft: "19px", color: "#8D8D8D" }}>Photographers</p>
      </div>

      <div
        className={styles.scroll}
        style={{ height: "450px", overflowY: "scroll" }}
      >
        {artists.map((artist) => (
          <div
            className={styles.artistContainer}
            style={{ backgroundImage: `url(${artist.post})` }}
          >
            <div className={styles.rightAvatarContainer}>
              <img src={artist.avatar} />
            </div>
            <div className={styles.textPosition}>
              <p style={{ color: "#FFF", fontWeight: 600 }}>{artist.name}</p>
              <p style={{ color: "#FFF" }}>{artist.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
