import React from "react";
import { useState ,} from "react";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

interface User {
  name: string;
  phoneNumber: string;
  email: string;
}

const FirstPage = () => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user.name && user.phoneNumber && user.email) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/second-page');
    } else {
      alert('Please fill out the form before proceeding.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom>
        User Information Form
      </Typography>
      <Paper
        component="main"
        elevation={3}
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(3),
          margin: "auto",
        }}
      >
        <Typography variant="h6">Please Enter the details below</Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item xs={10}>
              <TextField
                label="Name"
                fullWidth
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Phone Number"
                fullWidth
                name="phoneNumber"
                type="tel"
                value={user.phoneNumber}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={10}>
              <Button variant="contained" type="submit" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default FirstPage;
