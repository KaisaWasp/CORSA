import { Box, useTheme, Button, Typography } from "@mui/material";
import avatar from "../../assets/images/svg/avatar.svg";
import { useStyles, StyledAvatar } from "./style";

const Avatar = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledContainer}>
      <Box sx={styles.StyledAvatarBlock}>
        <Box sx={{ position: "relative" }}>
          <StyledAvatar src={avatar} />
          <Typography sx={styles.StyledNickName}>Rub1n01</Typography>
        </Box>
        <Button sx={styles.StyledButton}>Admin</Button>
      </Box>
      <Box sx={styles.StyledChangeBlock}>
        <Box sx={styles.StyledMaincontainer}>
          <Box sx={styles.StyledTextContainer}>
            <Typography sx={styles.StyledTitle}>Метод вывода:</Typography>
          </Box>
          <Typography sx={styles.StyledSelectText}>Не выбран</Typography>
        </Box>
        <Box sx={styles.StyledMaincontainer}>
          <Box sx={styles.StyledTextContainer}>
            <Typography sx={styles.StyledTitle}>Пресет:</Typography>
          </Box>
          <Typography sx={styles.StyledSelectText}>Не указана</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Avatar;
