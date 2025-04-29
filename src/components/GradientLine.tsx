import React from "react";
import { Box } from "@mui/material";

const GradientLine: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      height: 5,
      background: "linear-gradient(90deg, #6c63ff 0%, #b3b3e6 100%)",
    }}
  />
);

export default GradientLine;
