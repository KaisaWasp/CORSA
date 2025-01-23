import { Box, useTheme, Typography } from "@mui/material";
import { useStyles } from "./style";

const IFrame = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledBox}>
      <Box sx={styles.StyledTextBox}>
        <Typography sx={styles.StyledTitle}>
          До сих пор не <br />{" "}
          <Typography sx={styles.StyledTitlePeach}>разобрались?</Typography>
        </Typography>
        <Typography sx={styles.StyledText}>
          Посмотрите подробное видео, <br /> которое может вам помочь
        </Typography>
      </Box>
      <Box sx={styles.StyledVideoBox}>
        <Box sx={styles.StyledVideo} />
      </Box>
    </Box>
  );
};

export default IFrame;
