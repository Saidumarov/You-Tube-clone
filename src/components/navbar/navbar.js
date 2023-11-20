import { Box, Button, Stack } from "@mui/material";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
import "./index.scss";
import { MicRounded, VideoCall } from "@mui/icons-material";
import { Obuna } from "../../constants/svg";
import SiteBar from "../site-bar";
import { useContext, useEffect } from "react";
import { Modal } from "../ModalProvayder";
import { Menyu } from "../../constants/site-bar-btn";
import Login from "../login";
function Navbar() {
  const {
    left,
    setSiteBar,
    setNumber,
    siteBar,
    setLeft,
    login,
    setShowmodal,
    showmodal,
    user,
    setUser,
  } = useContext(Modal);
  useEffect(() => {
    setNumber(40);
    setSiteBar(<Menyu />);
    setLeft("");
  }, []);
  const show = () => {
    setShowmodal(true);
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
          {/* <Menyu menyu={menyua} /> */}
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
          <span className="span">
            <VideoCall />
          </span>
          <span className="span">
            <Obuna />
          </span>
          <Button className={`sigin ${user}`} onClick={show}>
            SIGN IN
          </Button>
          <span className={`usera ${user}`}>{login}</span>
          <Login />
        </Box>
      </Stack>
      <div className={`nav-item ${left}`}>
        <div className={`sigle-page-min-item ${left}`}>
          <SiteBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;