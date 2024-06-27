import { Container, Stack } from "@mui/material";
import MainSection from "@/src/home/components/MainSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Stack spacing={2}>
          <Item>Ingrese ubicación</Item>
          <Item>Seleccione huespedes</Item>
          <Item>Ingrese fechas</Item>
        </Stack>
      </Container>
    </>
  );
};
