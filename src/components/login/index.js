import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import { logo } from "../../constants";
import { Button } from "@mui/material";
import { Modal } from "../ModalProvayder";

function Login() {
  const { setLogin, showmodal, setShowmodal, setUser } = useContext(Modal);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Saqlangan user ma'lumotini olish uchun state
  const [storedUser, setStoredUser] = useState("");
  const show = () => {
    setShowmodal(true);
  };
  useEffect(() => {
    // localStorage dan o'qib olish
    const userFromStorage = localStorage.getItem("user");
    setStoredUser(userFromStorage);
  }, []); // useEffect faqat bir marta ishlasin

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Input qiymatlarini o'zgartirish va localStorage ga saqlash
    if (name === "user") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loginn = (e) => {
    e.preventDefault();

    // Validatsiya tekshirish
    const form = e.target.form;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setShowmodal(false);

    localStorage.setItem("login", true);
    const us = localStorage.getItem("login");
    setUser(us);

    // localStorage ga input qiymatlarini saqlash
    localStorage.setItem("user", name.charAt(0));

    // Qolgan logika (masalan, setLogin() ishlatish)
    setLogin(storedUser);
    window.location.reload();
  };

  return (
    <>
      {showmodal && (
        <div className="login-wrapper">
          <div className="login-wrapper-item">
            <div className="login-box">{logo}</div>
            <div className="login-box1">
              <form>
                <span>
                  {/* Inputlarga onChange hodisasi qo'shildi */}
                  <input
                    type="text"
                    name="user"
                    value={name}
                    onChange={handleInputChange}
                    required
                    placeholder="name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    placeholder="email"
                  />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                    placeholder="password"
                  />
                  <Button
                    type="submit"
                    onClick={loginn}
                    disabled={!name || !email || !password}
                  >
                    SIGN IN
                  </Button>
                </span>
              </form>
            </div>
          </div>

          {/* Saqlangan user ma'lumotini korsatish */}
        </div>
      )}
    </>
  );
}

export default Login;
