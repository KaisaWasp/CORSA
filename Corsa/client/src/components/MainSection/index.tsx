import { Box, useTheme, Typography, Button } from "@mui/material";
import mouse from "../../assets/images/svg/Mouse.svg";
import { useStyles, StyledMouseImg } from "./style";

const MainSection = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "153px",
      }}
    >
      <Box sx={styles.StyledContainer}>
        <Box sx={styles.StyledProjectNameLogoBox}>
          <Box sx={styles.StyledProjectNameLogo}>ASSETTO CORSA</Box>
          <Box sx={styles.StyledCISBox}>
            <Box sx={styles.StyledCISText}>CIS</Box>
          </Box>
        </Box>
        <Typography sx={styles.StyledAgitation}>
          Присодиняйтесь к нашему клубу!
        </Typography>
        <Box sx={styles.StyledBoxContainer}>
          <Button sx={styles.StyledHowPlayButton}>
            <Typography sx={styles.StyledButtonText}>
              Как начать играть?
            </Typography>
          </Button>
          <Box sx={styles.StyledCounterPlayers}>Игроков</Box>
        </Box>
        <Box sx={styles.StyledMouseBox}>
          <StyledMouseImg src={mouse} />
          <Typography>ЛИСТАЙ ДАЛЬШЕ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;
