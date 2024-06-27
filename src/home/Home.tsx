import {
  Container,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
} from "@mui/material";
import MainSection from "@/src/home/components/MainSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://e1.nmcdn.io/anicira/wp-content/uploads/2021/08/Emergency-cat.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Siguiente</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Home;
