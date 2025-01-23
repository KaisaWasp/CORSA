import { Box, useTheme, Button } from "@mui/material";
import { useStyles } from "./style";

const NewCard = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledCard}>
      <Box sx={styles.StyledImgBox} />
      <Box sx={styles.StyledTitleText}>ЛОГ ОБНОВЛЕНИЯ 1.1</Box>
      <Box sx={styles.StyledInfoText}>
        Представляем вашему вниманию наше крупное обновление 1.1
      </Box>
      <Button sx={styles.StyledButton}>Смотреть</Button>
    </Box>
  );
};

export default NewCard;
