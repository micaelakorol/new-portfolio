import { Button } from "@mui/material";
import React from "react";

const BtnContained = ({ item, children }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      href={item.visit}
      target="_blank"
    >
      {children}
    </Button>
  );
};

export default BtnContained;
