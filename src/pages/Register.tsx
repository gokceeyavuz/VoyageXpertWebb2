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

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
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
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    alert("Kayıt başarılı!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <GradientLine />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            minWidth: 500,
            maxWidth: 600,
            bgcolor: "#fff",
            boxShadow: 3,
            borderRadius: 3,
            mx: "auto",
          }}
        >
          {/* Kart başlığı mor arka planlı */}
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
              Üye Ol
            </Typography>
          </Box>
          <CardContent>
            <Box
              component="form"
              onSubmit={handleRegister}
              sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}
            >
              <TextField
                label="İsim"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Soyisim"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
                fullWidth
              />
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
                label="Telefon Numarası"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
                placeholder="05xxxxxxxxx"
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
              <TextField
                label="Yeni Şifre"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                placeholder="Şifrenizi tekrar girin"
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
                Kayıt Ol
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
