import {
  Container,
  Stack,
  TextField,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const Rooms = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
        <BottomNavigation
          // sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </Container>
    </>
  );
};

export default Rooms;
