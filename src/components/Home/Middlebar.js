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

import love from "../../assets/love.svg";
import like from "../../assets/like.png";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";

function Middlebar() {
  const users = [
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
  const description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <div>
      <div
        className={styles.scroll}
        style={{ marginTop: "20px", height: "520px", overflowY: "scroll" }}
      >
        {users.map((user) => (
          <div className={styles.userContainer}>
            <div className={styles.userPosition}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={user.avatar} />
              </div>
              <div style={{ marginLeft: "14px" }}>
                <p style={{ fontWeight: 600 }}>{user.name}</p>
                <p style={{ color: "#8D8D8D" }}>{user.id}</p>
              </div>
            </div>
            <p className={styles.discription}>{description}</p>

            <div className={styles.postImageContainer}>
              <img src={user.post} className={styles.postImage} />
            </div>
            <div
              style={{ borderBottom: "1px solid #F4F4F4", marginTop: "20px" }}
            ></div>
            <div className={styles.buttomPosition}>
              <div className={styles.buttomItemsCenter}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={like} />
                </div>
                <p style={{ marginLeft: "13px" }}>9.8k</p>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "18px",
                    }}
                  >
                    <img src={comment} />
                  </div>
                  <p style={{ marginLeft: "13px" }}>8.6k</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "18px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={share} />
                  </div>
                  <p style={{ marginLeft: "13px" }}>7.2k</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middlebar;
