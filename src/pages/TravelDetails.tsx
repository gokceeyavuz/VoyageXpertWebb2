import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Destination {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const travelDetails: Record<number, Destination> = {
  1: {
    title: "Paris, Fransa",
    description:
      "Paris, dünyanın en romantik şehirlerinden biridir. Eyfel Kulesi, Louvre Müzesi ve Notre Dame Katedrali gibi ikonik yapılarıyla ünlüdür.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    highlights: [
      "Eyfel Kulesi",
      "Louvre Müzesi",
      "Notre Dame Katedrali",
      "Champs-Élysées",
      "Montmartre",
    ],
  },
  2: {
    title: "Roma, İtalya",
    description:
      "Roma, antik tarih ve modern yaşamın mükemmel bir karışımını sunar. Kolezyum, Vatikan ve Trevi Çeşmesi gibi önemli tarihi yapıları barındırır.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    highlights: [
      "Kolezyum",
      "Vatikan",
      "Trevi Çeşmesi",
      "Pantheon",
      "Roma Forumu",
    ],
  },
  3: {
    title: "Tokyo, Japonya",
    description:
      "Tokyo, geleneksel Japon kültürü ile modern teknolojinin buluştuğu bir metropoldür. Shinjuku, Shibuya ve Asakusa gibi farklı karakterdeki bölgeleri keşfedin.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    highlights: [
      "Shibuya Crossing",
      "Senso-ji Tapınağı",
      "Tokyo Kulesi",
      "Meiji Tapınağı",
      "Akihabara",
    ],
  },
};

const TravelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = travelDetails[Number(id)];

  if (!destination) {
    return (
      <Container>
        <Typography variant="h4">Seyahat bulunamadı</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{ mb: 3 }}
      >
        Geri Dön
      </Button>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={destination.image}
            alt={destination.title}
          />
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {destination.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {destination.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Öne Çıkan Yerler:
            </Typography>
            <Box component="ul">
              {destination.highlights.map(
                (highlight: string, index: number) => (
                  <Typography component="li" key={index}>
                    {highlight}
                  </Typography>
                )
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert("Rezervasyon işlemi başlatıldı!")}
            >
              Rezervasyon Yap
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default TravelDetails;
