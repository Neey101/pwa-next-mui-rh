import {
  Container,
  Stack,
  TextField,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

const Rooms = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
        <Button variant="contained" size="large">
          Buscar
        </Button>

        <Stack direction={"row"}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.portalveterinaria.com/upload/20230607075107CASERVETcompra.jpg"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://cvlapau.com/slider1/data1/images/img2.png"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Stack>
      </Container>
    </>
  );
};

export default Rooms;
