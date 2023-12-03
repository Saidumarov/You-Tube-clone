import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Btn, Btn1, Btn2, Btn3 } from "../../constants/site-bar-btn";
import { Link } from "react-router-dom";
import { Modal } from "../ModalProvayder";

function SiteBar() {
  const [selectedTitle, setSelectedTitle] = useState("Главная");
  const { color, left } = useContext(Modal);
  useEffect(() => {});
  return (
    <div>
      <div className={`single-page-wrapper ${left}`}>
        {Btn?.map((item, index) => (
          <Link to={item?.link}>
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
              className={`button-menyu1 ${left}`}
            >
              <span>{item?.ico}</span>
              <p>{item?.title}</p>
            </button>
          </Link>
        ))}
        <span className={`button-menyu ${left}`}>
          <hr />
          {Btn1?.map((item, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
            >
              {item?.ico}
              <p>{item?.title}</p>
            </button>
          ))}
          <hr />
          <div>
            <p>Навигатор</p>
            {Btn2?.map((item, index) => (
              <button
                key={index}
                style={{
                  backgroundColor:
                    selectedTitle === item?.title ? "#272727" : "",
                }}
                onClick={() => setSelectedTitle(item?.title)}
              >
                {item?.ico}
                <p>{item?.title}</p>
              </button>
            ))}
            <hr />
          </div>
          {Btn3?.map((item, index) => (
            <button
              key={index}
              style={{
                backgroundColor: selectedTitle === item?.title ? "#272727" : "",
              }}
              onClick={() => setSelectedTitle(item?.title)}
            >
              {item?.ico}
              <p>{item?.title}</p>
            </button>
          ))}
          <hr />
          <p className="sait-bar-p">
            О сервисеПрессеАвторские праваСвязаться с намиАвторамРекламодателям
            Разработчикам <br /> <br />
            Условия использования Конфиденциа льностьПравила и безопасностьКак
            работает YouTubeТестирование новых функций
            <p> © 2023 Google LLC</p>
          </p>
        </span>
        <div style={{ paddingBottom: "80px" }}></div>
      </div>
    </div>
  );
}

export default SiteBar;
