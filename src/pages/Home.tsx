import React from "react";
import Header from "../components/Header";
import GradientLine from "../components/GradientLine";
import Navbar from "../components/Navbar";
import SearchHero from "../components/SearchHero";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const travelDestinations = [
  {
    id: 1,
    title: "Paris, Fransa",
    description: "Aşk şehri Paris'te unutulmaz bir deneyim yaşayın.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Roma, İtalya",
    description: "Tarih ve kültürün başkenti Roma'yı keşfedin.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Tokyo, Japonya",
    description: "Modern ve geleneksel Japon kültürünü deneyimleyin.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 4,
    title: "Amalfi, İtalya",
    description:
      "Büyüleyici sahil kasabası Amalfi'de Akdeniz'in tadını çıkarın.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 5,
    title: "Rize, Türkiye",
    description:
      "Yeşilin her tonunu görebileceğiniz Karadeniz'in incisi Rize'yi keşfedin.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 6,
    title: "Antalya, Türkiye",
    description:
      "Tarihi ve doğal güzellikleriyle ünlü Antalya'da unutulmaz bir tatil yapın.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const favoriteHotels = [
  {
    id: 1,
    title: "AquaPark Otelleri",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Termal Oteller",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Balayı Otelleri",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Ekonomik Oteller",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Her Şey Dahil Oteller",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "YurtDışı Oteller",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Deluxe Oteller",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Butik Oteller",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Denize Sıfır Oteller",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <GradientLine />
      <Navbar />
      <SearchHero />
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
          mb={3}
          ml={8}
        >
          Favori Oteller
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 2,
            alignSelf: "center",
          }}
        >
          {favoriteHotels.map((hotel) => (
            <Card
              key={hotel.id}
              sx={{ minWidth: 260, maxWidth: 260, flex: "0 0 auto", ml: 10 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={hotel.image}
                alt={hotel.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} align="center">
                  {hotel.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700, mt: 6 }}
        >
          Popüler Seyahat Noktaları
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            mt: 2,
          }}
        >
          {travelDestinations.map((destination) => (
            <Card key={destination.id} sx={{ width: 320 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {destination.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    backgroundColor: "#6c63ff",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#5548c8",
                    },
                  }}
                  onClick={() => navigate(`/travel/${destination.id}`)}
                  fullWidth
                >
                  Detayları Gör
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
