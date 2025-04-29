import React, { useState } from "react";
import Header from "../components/Header";
import GradientLine from "../components/GradientLine";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Lütfen geçerli bir e-posta adresi giriniz. (örn: ornek@mail.com)");
      return;
    }
    if (password.length < 6 || !/[A-Z]/.test(password)) {
      alert(
        "Şifre en az 6 karakter olmalı ve en az bir büyük harf içermelidir."
      );
      return;
    }
    alert("Giriş başarılı!");
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      <Header />
      <GradientLine />
      <Container
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            minWidth: 400,
            maxWidth: 480,
            bgcolor: "#fff",
            boxShadow: 3,
            borderRadius: 3,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              bgcolor: "#6c63ff",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              p: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 700, letterSpacing: 1 }}
            >
              Giriş Yap
            </Typography>
          </Box>
          <CardContent>
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}
            >
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                placeholder="ornek@mail.com"
              />
              <TextField
                label="Şifre"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                placeholder="Şifreniz"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#6c63ff",
                  color: "#fff",
                  fontWeight: 700,
                  mt: 1,
                  "&:hover": { backgroundColor: "#5548c8" },
                }}
              >
                Giriş Yap
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
