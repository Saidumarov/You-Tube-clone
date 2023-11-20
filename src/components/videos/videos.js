import React, { useContext } from "react";
import { VideoCard, ChanelCard, Loader } from "../index";
import "./index.scss";
import { Modal } from "../ModalProvayder";

function Videos({ videos }) {
  const { left } = useContext(Modal);

  if (!videos?.length) return <Loader />;

  // function getRandomItems(arr, count) {
  //   const shuffled = arr.slice();
  //   for (let i = shuffled.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //   }
  //   return shuffled.slice(0, count);
  // }

  // const extractedItems = getRandomItems(videos, 40);

  return (
    <div className={`video-wrapper ${left}`}>
      {videos?.map((item) => (
        <div className="video-item" key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChanelCard video={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
