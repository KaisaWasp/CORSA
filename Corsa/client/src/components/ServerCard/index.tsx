import { Box, Typography, useTheme, Button } from "@mui/material";
import copy from "../../assets/images/svg/copy.svg";
import play from "../../assets/images/svg/play.svg";
import { useStyles, StyledCopyIcon } from "./style";

const ServerCard = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledContainer}>
      <Box sx={styles.StyledShadow} />
      <Box sx={styles.StyledCard}>
        <Box sx={styles.StyledHeader}>
          <Typography sx={styles.StyledHeaderText}>
            #1 AC CIS | Dynamic | Shutoko
            <br /> Revival Project | Lite Ai Traffic...
          </Typography>
          <Box>
            <StyledCopyIcon src={copy} />
          </Box>
        </Box>

        <Box sx={styles.StyledFooter}>
          <Box sx={styles.StyledTextBox}>
            <Typography sx={styles.StyledNowPlay}>СЕЙЧАС ИГРАЮТ</Typography>
            <Box sx={styles.StyledCounterBox}>
              <Typography sx={styles.StyledOnlineNumber}>5</Typography>
              <Typography sx={styles.StyledCounter}>/ 60</Typography>
            </Box>
          </Box>
          <Button sx={styles.StyledButton}>
            <img src={play} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServerCard;
