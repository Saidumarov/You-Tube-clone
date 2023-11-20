import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Email, Fas, Radit, Right, Tiw, Watsap, X } from "../../constants/svg";
import { Modal } from "../ModalProvayder/index";
function CopeModal({ value, shareurl }) {
  const [copeText, setCopeText] = useState(value);
  const { modal, setModal, modal1, setModal1 } = useContext(Modal);
  const [active, setActive] = useState(null);
  const handelCopy = () => {
    navigator.clipboard.writeText(copeText);
    setActive("active");
    setTimeout(() => {
      setActive(null);
    }, 3000);
  };

  const btn = () => {
    setModal("none");
    setModal1("none");
  };

  return (
    <>
      <div
        className="modal"
        style={{ display: `${modal}` }}
        onClick={btn}
      ></div>
      <div className="modal-item-w" style={{ display: `${modal1}` }}>
        <div className="modal-item" style={{ display: `${modal}` }}>
          <div className="modal-item1">
            <p>Поделиться</p>
            <p onClick={btn} style={{ cursor: "pointer" }}>
              <X />
            </p>
          </div>
          <div className="modal-item2">
            <a href={`https://api.whatsapp.com/send/?text=${shareurl}`}>
              <div>
                <Watsap />
                WhatsApp
              </div>
            </a>
            <a
              href={`https://www.facebook.com/login.php?skip_api_login=${shareurl}`}
            >
              <div>
                <Fas />
                Facebook
              </div>
            </a>
            <a href={`https://connect.ok.ru`}>
              <div>
                <Email />
                OK
              </div>
            </a>
            <a
              href={`https://twitter.com/i/flow/login?redirect_after_login=${shareurl}`}
            >
              <div>
                <Tiw />
                Twitter
              </div>
            </a>
            <a href={`https://www.reddit.com/login/?dest=${shareurl}`}>
              <div>
                <Radit />
                Reddit
              </div>
            </a>
            <div className="right">
              <Right />
            </div>
          </div>
          <div className="modal-item3">
            <input
              type="text"
              value={copeText}
              onChange={(e) => setCopeText(e.target.value)}
            />
            <button onClick={handelCopy}>Копировать</button>
          </div>
        </div>
        <div className={`modal-itme4 ${active}`}>
          <p>Ссылка скопирована в буфер обмена</p>
        </div>
      </div>
    </>
  );
}

export default CopeModal;
