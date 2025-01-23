import { Box, useTheme, Typography } from "@mui/material";
import avatar from "../../assets/images/svg/avatar.svg";
import { useStyles, StyledAvatar } from "./styles";

const MessengerField = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledContainer}>
      <Box sx={styles.StyledLeftContent}>
        <StyledAvatar src={avatar} />
        <Box sx={styles.StyledTextBox}>
          <Typography sx={styles.StyledName}>Rub1n01</Typography>
          <Typography sx={styles.StyledMessenger}>
            12312312312312312312
          </Typography>
        </Box>
      </Box>
      <Typography>17.11.2024</Typography>
    </Box>
  );
};

export default MessengerField;
