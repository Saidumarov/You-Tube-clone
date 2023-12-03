import { Box, Button, Stack } from "@mui/material";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
import "./index.scss";
import { MicRounded, VideoCall } from "@mui/icons-material";
import { Obuna, X } from "../../constants/svg";
import SiteBar from "../site-bar";
import { useContext, useEffect } from "react";
import { Modal } from "../ModalProvayder";
import { Menyu } from "../../constants/site-bar-btn";
import Login from "../login";
import { useState } from "react";
function Navbar() {
  const [logoutWra, setLogoutWra] = useState();
  const {
    left,
    setSiteBar,
    setNumber,
    siteBar,
    setLeft,
    login,
    setShowmodal,
    user,
    set,
    setSet,
    setUser,
    setLogin,
  } = useContext(Modal);

  useEffect(() => {
    setNumber("40");
    setSiteBar(<Menyu />);
    setLeft("");
    setSet(0);
  }, []);

  const show = () => {
    setShowmodal(true);
  };

  const logout = () => {
    setLogoutWra("active");
  };
  const Logout = () => {
    setLogoutWra("");
    setUser("");
    setLogin("");
    window.location.reload();
  };
  return (
    <nav>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"2"}
        sx={{
          position: "sticky",
          top: "0",
          zIndex: 999,
          background: `${colors?.nav}`,
          height: "60px",
        }}
        className="nav"
      >
        <div className="menu-nav">
          {siteBar}
          <Link to={"/"} className="logo">
            {logo}
          </Link>
        </div>
        <Box className="serch-icon">
          <SearchBar />
          <span className="span">
            <MicRounded />
          </span>
        </Box>
        <Box className="nav-icon-right">
          <span className={`span ${user}`}>
            <VideoCall />
          </span>
          <span className={`span ${user}`}>
            <Obuna />
          </span>
          <Button className={`sigin ${user}`} onClick={show}>
            SIGN IN
          </Button>
          <span className={`usera ${user}`} onClick={logout}>
            {login}
          </span>
          <Login />
          <div className={`logout-w ${logoutWra}`}>
            <span className="X-w" onClick={() => setLogoutWra("")}>
              <X />
            </span>
            <Button className={`logout ${logoutWra}`} onClick={Logout}>
              {" "}
              LOGO Ut
            </Button>
          </div>
        </Box>
      </Stack>
      <div className={`nav-item ${left}`} style={{ transition: `.${set}s` }}>
        <div className={`sigle-page-min-item ${left}`}>
          <SiteBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
