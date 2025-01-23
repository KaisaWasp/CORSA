import ServerAccordion from "../ServerAccordion";
import { Box, useTheme } from "@mui/material";
import { useStyles } from "./style";

const AccordionSection = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledPosition}>
      <Box sx={styles.StyledText}>НАШИ СЕРВЕРА</Box>
      <Box sx={styles.StyledAccordionContainer}>
        <ServerAccordion />
        <ServerAccordion />
        <ServerAccordion />
        <ServerAccordion />
      </Box>
    </Box>
  );
};

export default AccordionSection;
