import React, { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Home from "../../assets/home.svg";
import Notifications from "../../assets/notification.svg";
import Shop from "../../assets/shop.svg";
import Conversation from "../../assets/conversation.svg";
import Wallet from "../../assets/wallet.svg";
import Subscription from "../../assets/subscription.svg";
import Profile from "../../assets/profile.svg";
import Setting from "../../assets/setting.svg";
import LogOut from "../../assets/logout.svg";
import { auth } from "../../Firebase";

function LeftSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const options = [
    { text: "Home", icon: Home },
    { text: "Notifications", icon: Notifications },
    { text: "Shop", icon: Shop },
    { text: "Conversation", icon: Conversation },
    { text: "Wallet", icon: Wallet },
    { text: "Subscription", icon: Subscription },
    { text: "My Profile", icon: Profile },
    { text: "Settings", icon: Setting },
  ];

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };
  return (
    <div className={styles.leftContainer}>
      <div style={{ marginTop: "30px" }}>
        {options.map((option, index) => (
          <div className={styles.optionContainer}>
            <div className={styles.optionIcons}>
              <img src={option.icon} />
            </div>
            <p
              style={{
                marginLeft: "18px",
                color: index === activeIndex && "#101010",
                fontWeight: index === activeIndex && 600,
              }}
            >
              {option.text}
            </p>
          </div>
        ))}
        <div className={styles.logOutDiv} onClick={handleLogout}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LogOut} />
          </div>
          <p style={{ marginLeft: "18px" }}>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
