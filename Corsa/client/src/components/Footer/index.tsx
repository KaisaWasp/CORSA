import { Box, useTheme, Typography } from "@mui/material";
import { useStyles } from "./style";

const Footer = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  
  return (
    <Box sx={styles.StyledFooter}>
      <Box sx={styles.StyledContainer}>
        <Box sx={styles.StyledBox}>
          <Typography sx={styles.StyledLeftText}>
            Пользовательское соглашение
          </Typography>
          <Typography sx={styles.StyledLeftText}>
            Политика защиты персональной информации
          </Typography>
        </Box>
        <Typography sx={styles.StyledRightText}>
          Assetto Corsa СНГ ООО ГОРН 12313213123 ИНН 3213131231
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
