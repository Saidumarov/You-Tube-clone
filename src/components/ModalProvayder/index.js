import React, { useEffect, useState } from "react";
import { Menyu } from "../../constants/site-bar-btn";
import { Button } from "@mui/material";

export const Modal = React.createContext();

function ModalProvayder({ children }) {
  // Get the stored user value from localStorage or use an empty string if it doesn't exist
  const storedUser = localStorage.getItem("user") || "";
  const us = localStorage.getItem("login") || "";
  console.log(storedUser);
  const [modal, setModal] = useState("none");
  const [modal1, setModal1] = useState("none");
  const [number, setNumber] = useState(40);
  const [left, setLeft] = useState("");
  const [siteBar, setSiteBar] = useState(<Menyu />);
  // Initialize login state with the stored user value
  const [login, setLogin] = useState(storedUser);
  const [showmodal, setShowmodal] = useState(false);
  const [user, setUser] = useState(us);
  useEffect(() => {
    // Update localStorage whenever the login state changes
    localStorage.setItem("login", user);
    localStorage.setItem("user", login);
  });

  return (
    <div>
      <Modal.Provider
        value={{
          modal,
          setModal,
          setModal1,
          modal1,
          number,
          setNumber,
          left,
          setLeft,
          siteBar,
          setSiteBar,
          login,
          setLogin,
          showmodal,
          setShowmodal,
          user,
          setUser,
        }}
      >
        {children}
      </Modal.Provider>
    </div>
  );
}

export default ModalProvayder;
