import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Apiservice } from "../../service/api.service";
import { Box } from "@mui/material";
import { Videos } from "../index";
import "./index.scss";
import { Modal } from "../ModalProvayder";
import SiteBar from "../site-bar";
import { Menyu } from "../../constants/site-bar-btn";
function Search() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const { setNumber, setLeft, setSiteBar } = useContext(Modal);
  useEffect(() => {
    setNumber(80);
    setLeft("");
    setSiteBar(<Menyu />);
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=${id}`);
        console.log(data);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "10vh" }}>
      <Box className="search-wrapper">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default Search;
