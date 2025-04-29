import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Profile: React.FC = () => {
  const userProfile = {
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    membershipDate: "01.01.2023",
    upcomingTrips: [
      { id: 1, destination: "Paris, Fransa", date: "15.06.2023" },
      { id: 2, destination: "Roma, İtalya", date: "20.07.2023" },
    ],
    pastTrips: [{ id: 3, destination: "Tokyo, Japonya", date: "10.03.2023" }],
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto",
                mb: 2,
                bgcolor: "primary.main",
              }}
            >
              <PersonIcon sx={{ fontSize: 50 }} />
            </Avatar>
            <Typography variant="h5" gutterBottom>
              {userProfile.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {userProfile.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Üyelik Tarihi: {userProfile.membershipDate}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert("Profil düzenleme sayfası açılıyor...")}
            >
              Profili Düzenle
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Yaklaşan Seyahatler
            </Typography>
            <List>
              {userProfile.upcomingTrips.map((trip) => (
                <React.Fragment key={trip.id}>
                  <ListItem>
                    <ListItemText
                      primary={trip.destination}
                      secondary={`Tarih: ${trip.date}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Geçmiş Seyahatler
            </Typography>
            <List>
              {userProfile.pastTrips.map((trip) => (
                <React.Fragment key={trip.id}>
                  <ListItem>
                    <ListItemText
                      primary={trip.destination}
                      secondary={`Tarih: ${trip.date}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Profile;
