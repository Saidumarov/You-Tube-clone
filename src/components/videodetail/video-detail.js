import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Apiservice } from "../../service/api.service";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { Loader, Videos } from "../index";
import { CheckCircle, Visibility } from "@mui/icons-material";
import "./index.scss";
import { Like, Obuna, Share } from "../../constants/svg";
import Commentary from "../commentary";
import CopeModal from "../cope-modal";
import { Modal } from "../ModalProvayder";
import { Menyuu } from "../../constants/site-bar-btn";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVIdeo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  const [post, setPost] = useState(false);
  const initialIsSubscribed = localStorage.getItem("isSubscribed") === "true";
  const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed);
  const { setModal, setModal1, setNumber, setSiteBar, setLeft, setSet } =
    useContext(Modal);
  useEffect(() => {
    localStorage.setItem("isSubscribed", isSubscribed.toString());
  }, [isSubscribed]);

  const handleButtonClick = () => {
    setIsSubscribed(!isSubscribed);
  };
  useEffect(() => {
    setNumber(40);
    setSiteBar(<Menyuu />);
    setLeft("activa ");
    setTimeout(() => {
      setSet(4);
    }, 1500);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(
          `videos?part=sinppet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
        const relatedDete = await Apiservice.fetching(
          `search?part=sinppet&relatedToVideoId=${id}`
        );
        setRelatedVideo(relatedDete?.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  if (!videoDetail) {
    return <Loader />;
  }

  const handelmodal = () => {
    setModal("block");
    setModal1("flex");
  };

  const {
    snippet: { title, channelTitle, description, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  const MAX_LENGTH = 500;
  const shouldShowMoreLink = description?.length > MAX_LENGTH;

  return (
    <div>
      <Box className="video-wrap-clon" mb={10}>
        <CopeModal
          value={`https://you-tube-demo.vercel.app/video/${videoDetail?.id}`}
          shareurl={`https://you-tube-demo.vercel.app/${videoDetail?.id}`}
        />
        <Box display={"flex"} className="video-wrap-clon-itme">
          <Box width={"65%"}>
            <ReactPlayer
              url={`https://.youtube.com/watch?v=${id}`}
              className="react-palyr"
              controls
            />
            <Typography
              variant="h5"
              fontWeight={"bold"}
              p={2}
              sx={{ color: "#F1F1F1" }}
            >
              {title}
            </Typography>
            <Box className="videos-leke">
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                marginTop={"5px"}
                color={"white"}
                marginLeft={"10px"}
              >
                <Link
                  to={`/channel/${videoDetail?.snippet?.channelId}`}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar
                    alt={channelTitle}
                    src={thumbnails?.default?.url}
                    style={{ marginLeft: "10px" }}
                  />
                  <Typography
                    variant={`subtitle2`}
                    color={"gray"}
                    className="video-avatar"
                    style={{ paddingLeft: "10px" }}
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                {isSubscribed ? (
                  // Agar obuna bo'lib qolgan bo'lsa
                  <button className="obuna1" onClick={handleButtonClick}>
                    <Obuna /> Вы подписаны
                  </button>
                ) : (
                  // Aks holda
                  <button className="obuna" onClick={handleButtonClick}>
                    Подписаться
                  </button>
                )}
              </Stack>
              <Stack
                direction={"row"}
                gap={"20px"}
                alignItems={"center"}
                py={1}
                px={2}
              >
                <Stack
                  sx={{ opacity: ".7" }}
                  direction={"row"}
                  alignItems={"center"}
                  gap={"3px"}
                  color={"white"}
                >
                  <Visibility />
                  {parseInt(viewCount).toLocaleString()}
                </Stack>
                {/* <Stack
                sx={{ opacity: ".7" }}
                direction={"row"}
                alignItems={"center"}
                gap={"3px"}
                color={"white"}
              >
                <MarkChatRead />
                {parseInt(commentCount).toLocaleString()}
              </Stack> */}
                <Box className="box">
                  <button className="box1">
                    <Stack className="svg">
                      <Like />
                    </Stack>
                    <Stack sx={{ color: "white" }}>
                      {parseInt(likeCount).toLocaleString()}
                    </Stack>
                  </button>
                  <button className="box2">
                    <Stack>
                      <Like />
                    </Stack>
                  </button>
                </Box>

                <button className="box3" onClick={handelmodal}>
                  <Stack>
                    <Share />
                  </Stack>
                </button>
              </Stack>
            </Box>
            <Box className="dscription">
              <Typography
                variant={`subtitle2`}
                sx={{ opacity: ".8", color: "white" }}
              >
                <span>
                  {post ? description : description?.substring(0, MAX_LENGTH)}
                </span>
                {shouldShowMoreLink && (
                  <span className="span-more" onClick={() => setPost(!post)}>
                    {post ? " less." : " more..."}
                  </span>
                )}
              </Typography>
            </Box>
            <Stack>{/* <Commentary /> */}</Stack>
          </Box>
          <Box width={"30%"} className="video-detial-card">
            <Videos videos={relatedVIdeo} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default VideoDetail;
