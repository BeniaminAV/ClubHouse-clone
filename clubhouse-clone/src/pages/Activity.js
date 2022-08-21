import React from "react";
import style from "../style/activity.module.css";
import SubHeader from "../components/SubHeader";
import data from "../data/activity.json";
import { Input } from "antd";


function Activity() {
  const { activity } = data;

  return (
    <div className={style.activityContainer}>
      <div className={style.header}>
        <SubHeader pageTitle="Acitivity" />
        <Input
          style={{
            backgroundColor: "#f4f4f4",
            borderRadius: "0.8em",
            padding: "0.3em 1em",
            border: "none",
            boxShadow: "none",
          }}
          size="large"
          placeholder="Find Activity"
          prefix={<img src="/images/search.png" alt="activity" width="15px" />}
        ></Input>
      </div>

      <div className={style.mailActivity}>
        {activity.map((item) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/user-img.jpg" alt="" />
              <div className="ml-2">
                <p>
                  {item.title}
                  {item.description}
                </p>
              </div>
              <div className={style.time}>{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
