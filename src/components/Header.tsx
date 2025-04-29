import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#6c63ff", letterSpacing: 1 }}
        >
          VX
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#b3b3e6", letterSpacing: 1 }}
        >
          VoyageXpert
        </Typography>
      </Box>
      {/* Sağ butonlar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          color="inherit"
          sx={{ fontWeight: 400 }}
          onClick={() => navigate("/help")}
        >
          Yardım
        </Button>
        <Button
          color="inherit"
          sx={{ fontWeight: 400 }}
          onClick={() => navigate("/blog")}
        >
          Blog
        </Button>
        <Button
          color="inherit"
          sx={{ fontWeight: 700 }}
          onClick={() => navigate("/login")}
        >
          Giriş Yap
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontWeight: 700, borderRadius: 2 }}
          onClick={() => navigate("/register")}
        >
          Üye Ol
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
