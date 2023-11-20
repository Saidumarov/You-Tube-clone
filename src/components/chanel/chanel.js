import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

function Chanel() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <Link to={"/"}>
        <Button sx={{ paddingTop: "150px", color: "white" }}>
          Bosh sahifa
        </Button>
      </Link>
    </div>
  );
}

export default Chanel;
