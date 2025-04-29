import React from "react";
import Header from "../components/Header";
import GradientLine from "../components/GradientLine";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "DÜNYA",
    title: "Tam Pansiyon Nedir? Neler Dahildir?",
    author: "JOLLY",
    date: "17 Nisan 2025",
    excerpt:
      "Tatil planı yaparken konforlu ve ekonomik bir konaklama arayışında olanlar için tam pansiyon hizmeti büyük bir avantaj sunuyor. Özellikle uzun ...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "DÜNYA",
    title: "Balkan Ülkeleri Rehberi: Tam Liste ve Gezi Önerileri",
    author: "JOLLY",
    date: "17 Nisan 2025",
    excerpt:
      "Balkan ülkeleri, pek çok farklı medeniyetin izlerini taşıyan, kültürel çeşitliliği ve doğal güzellikleriyle dikkat çeken bir bölge. Doğu Avrupa'nın güneydoğusunda ...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    category: "DÜNYA",
    title: "Türkiye'de Glamping Yapılacak En Güzel Yerler",
    author: "JOLLY",
    date: "17 Nisan 2025",
    excerpt:
      "Doğayla iç içe, konforlu ve lüks bir kamp deneyimi yaşamak isteyenler için Türkiye'nin en güzel glamping noktalarını derledik ...",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    category: "DÜNYA",
    title: "Ankara'nın Turistik İlçesi Beypazarı'nda Gezilecek Yerler",
    author: "JOLLY",
    date: "16 Nisan 2025",
    excerpt:
      "Tarihi dokusu ve doğal güzellikleriyle ünlü Beypazarı'nda mutlaka görmeniz gereken yerleri keşfedin ...",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    category: "DÜNYA",
    title: "Meis Adası Rehberi: Turkuaz Koylar ve Tarihi Yapılar",
    author: "JOLLY",
    date: "16 Nisan 2025",
    excerpt:
      "Ege'nin incisi Meis Adası'nda gezilecek yerler, turkuaz koylar ve tarihi yapılar hakkında detaylı bilgiler ...",
  },
];

const categories = [
  "Tümü",
  "Dünya",
  "Türkiye",
  "Rehberler",
  "Eğlence",
  "Keşfet",
  "Yeme & İçme",
];

const recentPosts = blogPosts.slice(0, 5);

const Blog: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fff" }}>
      <Header />
      <GradientLine />
      <Box sx={{ maxWidth: 1300, mx: "auto", mt: 6, px: 2 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          <span style={{ color: "#9A93FF", fontWeight: 900, fontSize: "40px" }}>
            V
          </span>
          <span style={{ color: "#CEB1FD", fontWeight: 300, fontSize: "24px" }}>
            oyage
          </span>
          <span style={{ color: "#9A93FF", fontWeight: 900, fontSize: "40px" }}>
            X
          </span>
          <span style={{ color: "#CEB1FD", fontWeight: 300, fontSize: "24px" }}>
            pert
          </span>
          <span
            style={{
              color: "#4F85EA",
              fontWeight: 600,
              fontSize: "35px",
              marginLeft: 34,
            }}
          >
            Blogg!
          </span>
        </Typography>

        <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
          {/* Blog Kartları */}
          <Box sx={{ flex: 2, display: "flex", flexWrap: "wrap", gap: 4 }}>
            {blogPosts.map((post) => (
              <Box
                key={post.id}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 16px)" },
                  minWidth: 280,
                  maxWidth: 400,
                  flex: "1 1 45%",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="caption"
                      color="primary"
                      sx={{ fontWeight: 700, letterSpacing: 1 }}
                    >
                      {post.category}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {post.author} / {post.date}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {post.excerpt}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        color: "#6c63ff",
                        borderColor: "#6c63ff",
                        fontWeight: 600,
                      }}
                    >
                      Devamını Oku
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          {/* Sağ Panel */}
          <Box sx={{ flex: 1, minWidth: 260, maxWidth: 340 }}>
            <Box
              sx={{ bgcolor: "#fafbfc", p: 3, borderRadius: 3, boxShadow: 1 }}
            >
              <TextField
                placeholder="Ara..."
                fullWidth
                size="small"
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, mb: 1, mt: 2 }}
              >
                KATEGORİLER
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                defaultValue="Tümü"
                sx={{ mb: 3 }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                SON YAZILAR
              </Typography>
              <List>
                {recentPosts.map((post) => (
                  <ListItem
                    key={post.id}
                    alignItems="flex-start"
                    sx={{ px: 0, py: 1 }}
                  >
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      sx={{ width: 56, height: 40, borderRadius: 1, mr: 2 }}
                    />
                    <ListItemText
                      primary={post.title}
                      secondary={post.date}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 600 }}
                      secondaryTypographyProps={{ fontSize: 12 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Blog;
