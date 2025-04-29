import React from "react";
import {
  // AppBar,
  // Toolbar,
  // Typography,
  Button,
  Tabs,
  Tab,
  Box,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";

const menuItems = [
  "Otel",
  "Tur",
  "Yurt Dışı",
  "Gemi",
  "Erken Rezervasyon Fırsatları",
  "Kampanyalar",
];

const SearchHero: React.FC = () => {
  const [tab, setTab] = React.useState(1); // 0: Otel Ara, 1: Tur Ara

  return (
    <Box sx={{ background: "#fff", borderBottom: "1px solid #e0e0e0", pb: 4 }}>
      {/* Menü ve Butonlar */}


      {/* Sekmeli Arama Kutusu */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Paper
          elevation={2}
          sx={{ p: 3, borderRadius: 3, minWidth: 700, maxWidth: "90%" }}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            aria-label="search tabs"
            sx={{ mb: 2 }}
            TabIndicatorProps={{ style: { background: "#6c63ff", height: 3 } }}
          >
            <Tab label="Otel Ara" sx={{ fontWeight: tab === 0 ? 700 : 400 }} />
            <Tab label="Tur Ara" sx={{ fontWeight: tab === 1 ? 700 : 400 }} />
          </Tabs>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              label={
                tab === 0
                  ? "Otel Şehir,Bölge veya Tema"
                  : "Tur Şehir,Bölge veya Tema"
              }
              variant="outlined"
              size="small"
              sx={{ flex: 2, minWidth: 180 }}
            />
            <TextField
              label="25-30 Nisan"
              variant="outlined"
              size="small"
              sx={{ flex: 1, minWidth: 120 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">📅</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Kişi Sayısı"
              variant="outlined"
              size="small"
              sx={{ flex: 1, minWidth: 100 }}
              value="4 Kişi"
              InputProps={{ readOnly: true }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ px: 4, fontWeight: 700, height: 40, alignSelf: "center" }}
            >
              ARA
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SearchHero;
