import React, { useState } from "react";
import style from "../../style/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

export default function StartRoom(props) {
  const [room, setRoom] = useState("Open");
  return (
    <>
      <div className={style.switch_Line}></div>
      <div className="text-right">
        <button className={style.addTopicBtn}>+ Add a topic</button>
      </div>
      <div className={style.selectRoom}>
        <button
          className={room == "open" ? style.active : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>

        <button
          className={room == "social" ? style.active : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>

        <button
          className={room == "closed" ? style.active : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>
        Start a Room{" "}
        <span>
          {room == "closed"
            ? "for people I Choose"
            : room == "social"
            ? "with people I follow"
            : "open to everyone"}
        </span>
      </p>
      <div className="text-center">
        <button
          className={style.letGoBtn}
          onClick={() => {
            props.setSheetCreateRoom(true);
            props.setSheetVisible(true);
          }}
        >
            Let's Go
        </button>
      </div>
    </>
  );
}
