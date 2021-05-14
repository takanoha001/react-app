import React from "react";
import "./styles.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  CardMedia,
  Button,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const App4 = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            {/* learn variant, align, color, gutterBottom */}
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragram
            >
              This is a photo album
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action{" "}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App4;
