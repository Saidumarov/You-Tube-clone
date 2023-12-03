import {
  FitnessCenterRounded,
  Home,
  ReceiptLong,
  Restore,
  Settings,
  SlowMotionVideo,
  Menu,
} from "@mui/icons-material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SensorsIcon from "@mui/icons-material/Sensors";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import FlagIcon from "@mui/icons-material/Flag";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useContext } from "react";
import { Modal } from "../components/ModalProvayder";
export const Btn = [
  {
    ico: <Home />,
    title: "Главная",
    link: "/",
  },
  {
    ico: <SlowMotionVideo />,
    title: " Shorts",
  },
  {
    ico: <SubscriptionsIcon />,
    title: " Подписки",
  },
];
export const Btn1 = [
  {
    ico: <VideoLibraryIcon />,
    title: " Библиотека",
  },
  {
    ico: <Restore />,
    title: " История",
  },
  {
    ico: <OndemandVideoIcon />,
    title: " Смотреть позже",
  },
  {
    ico: <ThumbUpOffAltIcon />,
    title: " Понравившиеся",
  },
];

export const Btn2 = [
  {
    ico: <WhatshotIcon />,
    title: " В тренде",
  },
  {
    ico: <MusicNoteIcon />,
    title: " Музыка",
  },
  {
    ico: <SensorsIcon />,
    title: " Трансляции",
  },
  {
    ico: <VideogameAssetIcon />,
    title: " Видеоигры",
  },
  {
    ico: <ReceiptLong />,
    title: " Новости",
  },
  {
    ico: <FitnessCenterRounded />,
    title: " Спорт",
  },
  {
    ico: <ManageHistoryIcon />,
    title: " Обучение",
  },
];

export const Btn3 = [
  {
    ico: <Settings />,
    title: " Настройки",
  },
  {
    ico: <FlagIcon />,
    title: " Жалобы",
  },
  {
    ico: <ReportProblemIcon />,
    title: " Справка",
  },
  {
    ico: <AnnouncementIcon />,
    title: " Отправить отзыв",
  },
];

export const Menyu = () => {
  const { left, setLeft } = useContext(Modal);
  const menyu = () => {
    if (left === "") {
      setLeft("active");
    } else {
      setLeft(!left ? left : "");
    }
  };

  return (
    <span onClick={menyu} className="menu-active">
      <Menu />
    </span>
  );
};
export const Menyuu = () => {
  const { left, setLeft } = useContext(Modal);
  const menyu = () => {
    if (left === "") {
      setLeft("activa");
    } else {
      setLeft(!left ? left : "");
    }
  };
  return (
    <span onClick={menyu} className="menu-active">
      <Menu />
    </span>
  );
};
