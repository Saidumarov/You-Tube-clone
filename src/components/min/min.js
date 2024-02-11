import { Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Category, Videos } from "../index";
import { Apiservice } from "../../service/api.service";
import "./index.scss";
import { Modal } from "../ModalProvayder";
import { Menyu, Menyuu } from "../../constants/site-bar-btn";
function Min() {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const { left, setLeft, setSiteBar, setSet } = useContext(Modal);
  const selectedCategoryHander = (category) => setSelectCategory(category);

  useEffect(() => {
    const maxWidth = window.innerWidth;

    if (maxWidth <= 1440) {
      setLeft("");
      setSiteBar(<Menyuu />);
      setSet(0);
    } else {
      setSiteBar(<Menyu />);
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const data = await Apiservice.fetching(
        `search?part=snippet&q=${selectCategory}`
      );
      setVideos(data.items);
    };
    getData(getData);
  }, [selectCategory]);

  return (
    <Stack className="min-page">
      <div className={`sigle-page-min ${left}`}></div>
      <div className={`hom-min-page ${left}`}>
        <div className="wrapper-min">
          <div className="category">
            <Category
              selectedCategoryHander={selectedCategoryHander}
              selectCategory={selectCategory}
            />
          </div>
          <Videos videos={videos} />
        </div>
      </div>
    </Stack>
  );
}

export default Min;
