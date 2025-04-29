import React from "react";
import { Box, Button } from "@mui/material";

const navItems = [
  "Otel",
  "Tur",
  "Yurt Dışı",
  "Gemi",
  "Erken Rezervasyon Fırsatları",
  "Kampanyalar",
];

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f7f7fa",
        display: "flex",
        alignItems: "center",
        height: 48,
        px: 4,
        borderBottom: "1px solid #e0e0e0",
        gap: 2,
      }}
    >
      {navItems.map((item) => (
        <Button
          key={item}
          color="inherit"
          sx={{
            fontWeight: 600,
            fontSize: 16,
            color: "#222",
            textTransform: "none",
            minWidth: 0,
            px: 2,
            "&:hover": { color: "#6c63ff", background: "transparent" },
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default Navbar;
