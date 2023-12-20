import { Button } from "@mui/material";
import React from "react";

const BtnVisitProject = ({visit,url}) => {
  return (
    <>
      <Button variant="outlined" size="small" target="_blank" href={visit}>
        Visitar
      </Button>
      <Button variant="outlined" size="small" target="_blank" href={url}>
        Ver en Github
      </Button>
    </>
  );
};

export default BtnVisitProject;
