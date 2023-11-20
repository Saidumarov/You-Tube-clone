import {
  Avatar,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import "./index.scss";
import { Link } from "react-router-dom";
import { Modal } from "../ModalProvayder";
function VideoCard({ video }) {
  const { number, left } = useContext(Modal);
  return (
    <div className={`card-wrapper ${left}`}>
      <Link to={`/video/${video?.id?.videoId}`} className="a">
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          className="card-medi"
        />
        <CardContent
          sx={{
            backgroundColor: "#141A1F",
            position: "relative",
          }}
          className="card-content"
        >
          <>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              sx={{ color: "white", lineHeight: "20px" }}
              className="video-title"
            >
              {video?.snippet?.title?.slice(0, number)}
            </Typography>
            <Typography
              variant="subtitle2"
              className="dis"
              sx={{ color: "gray", fontSize: "14px", marginTop: "5px" }}
            >
              {video?.snippet?.description?.slice(0, number)}...
            </Typography>
          </>
          <>
            <Stack
              direction={"row"}
              position={"absolute"}
              alignItems={"center"}
              gap={"5px"}
              className="user"
            >
              <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Avatar
                  src={video?.snippet?.thumbnails?.high?.url}
                  className="content-avatar"
                />
                <Typography variant="subtitle2" className="video-avatar">
                  {video?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", ml: "5px", color: "gray" }}
                  />
                </Typography>
                <Typography
                  ml={"5px"}
                  sx={{ color: "#868686" }}
                  className="year"
                >
                  {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
              </Link>
            </Stack>
          </>
        </CardContent>
      </Link>
    </div>
  );
}

export default VideoCard;
