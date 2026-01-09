import React from "react";
import Image from "next/image";

// Internal import
import Style from "./Notification.module.css";
import userImage1 from "@/public/img/user-1.png";

export default function Notification() {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div>
        <div>
          <Image
            src={userImage1}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Shoaib Akhter</h4>
          <p>Measure action of your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
}
