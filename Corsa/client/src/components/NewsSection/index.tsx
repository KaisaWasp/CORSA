import NewCard from "../NewCard";
import { Box, useTheme } from "@mui/material";
import { useStyles } from "./style";

const NewSection = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledPosition}>
      <Box sx={styles.StyledContainer}>
        <Box sx={styles.StyledTitle}>новости проекта</Box>
        <Box sx={styles.StyledCardBox}>
          <NewCard />
          <NewCard />
          <NewCard />
        </Box>
      </Box>
    </Box>
  );
};

export default NewSection;
